// prettier-ignore
import {
    CCBRACK,
    CCPAREN,
    CELL,
    CLOWERA, CLOWERZ, 
    COBRACE, COBRACK, COPAREN, DATA_SIZE, NULL, START_DATA, START_PROG,
} from './constants';
import { putStr } from './io';

import { getb, mem, setb } from './memory';
import { ip, opcodes, setIncMode, setIP, setToken, token } from './opcodes';
import { setStacks } from './stacks';

const ifstack: number[] = [];
const loopstack: number[] = [];

let run: boolean;
let here: number;
let oldHere: number;

export const interpReset = (): void => {
    for (let i = START_DATA; i < DATA_SIZE; i++) {
        setb(i, 0);
    }
    here = START_PROG;
    oldHere = here;
    setStacks(140, 20);
    run = true;
};

const interpTick = (restart?: boolean): boolean => {
    let restarting = restart;
    while (run && ip < here) {
        if (restarting) setIP(ip - 1);
        setToken(getb(ip));
        const result = Boolean(opcodes[token]());
        if (token < CLOWERA) {
            setIncMode(false);
        } else if (token > CLOWERZ) {
            setIncMode(false);
        }
        restarting = false;
        setIP(ip + 1);
        if (result) return true;
    }
    return false;
};

export const interpret = async (text: string): Promise<void> => {
    let save = false; // save text if it contains a procedure definition
    for (const char of text) {
        const code = char.codePointAt(0);
        if (code === COBRACE) save = true;
        setb(here++, code!);
        // if (code === COPAREN || code === COBRACK) {
        //     (code === COPAREN ? ifstack : loopstack).push(here);
        //     mem.setInt32(here, 0);
        //     here += CELL;
        // }
        // else if (code === CCPAREN || code === CCBRACK) {
        //     const address = (code === COPAREN ? ifstack : loopstack).pop();
        //     if (address === undefined) putStr(`Error: Unmatched ${(code === COPAREN ? ')' : ']')}`);
        //     mem.setInt32(address!, here);
        // }
    }
    setb(here++, NULL);
    setIP(oldHere);
    await new Promise<void>((resolve) => {
        (function loop(restart = false) {
            const result = interpTick(restart);
            if (run && ip < here) setTimeout(() => loop(result));
            else resolve();
        })();
    });
    if (!save) {
        here = oldHere;
    }
    oldHere = here;
};
