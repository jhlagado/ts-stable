// prettier-ignore
import {
    CLOWERA, CLOWERZ, 
    COBRACE, DATA_SIZE, NULL, START_DATA, START_PROG, TCELL,
} from './constants';
import { state } from './globals';
import { putStr, setOutputBuffer } from './io';

import { getb, setb, tget } from './memory';
import { opcodes } from './opcodes';

export const interpReset = (): void => {
    for (let i = START_DATA; i < DATA_SIZE; i++) {
        setb(i, 0);
    }
    setOutputBuffer('');
    state.run = true;
    state.here = START_PROG;
    state.oldHere = START_PROG;
    state.sp = 140;
    state.rp = 20;
    console.log('state', JSON.stringify(state));
};

const interpTick = (restart?: boolean): boolean => {
    let restarting = restart;
    while (state.run && state.ip < state.here) {
        if (restarting) state.ip -= 1;
        state.token = getb(state.ip);
        const result = Boolean(opcodes[state.token]());
        if (state.token < CLOWERA) {
            state.incMode = false;
        } else if (state.token > CLOWERZ) {
            state.incMode = false;
        }
        restarting = false;
        state.ip += 1;
        if (result) return true;
    }
    return false;
};

export const interpret = async (text: string): Promise<void> => {
    try {
        let save = false; // save text if it contains a procedure definition
        for (const char of text) {
            const code = char.codePointAt(0);
            if (code === COBRACE) save = true;
            setb(state.here++, code!);
        }
        setb(state.here++, NULL);
        state.ip = state.oldHere;
        await new Promise<void>((resolve) => {
            (function loop(restart = false) {
                const result = interpTick(restart);
                if (state.run && state.ip < state.here) setTimeout(() => loop(result));
                else resolve();
            })();
        });
        if (!save) {
            state.here = state.oldHere;
        }
        state.oldHere = state.here;
        if (state.sp < 140) state.sp = 140;
        if (state.rp < 20) state.rp = 20;
        console.log('state', JSON.stringify(state));
    } catch (e) {
        for (let i = START_PROG; i < Math.min(10000, state.here); i++) {
            const char = String.fromCodePoint(getb(i));
            if (i === state.ip) {
                putStr(`<span style="color:red">${char}</span>`);
            } else {
                putStr(char);
            }
            if ((i - START_PROG + 1) % 80 === 0) putStr('\n');
        }
        const { ip, sp, rp } = state;
        putStr(`ip: ${ip} sp: ${sp} rp: ${rp}\n\n`);
        for (let i = CLOWERA; i <= CLOWERZ; i++) {
            const key = String.fromCodePoint(i);
            const value = tget(i * TCELL);
            putStr(`${key}: ${value}\t`);
            if (i % 4 === 0) putStr('\n');
        }
        console.log(e.stack);
    }
};
