/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    CAPOS,
    CCBRACK,
    CCPAREN,
    CDOT,
    CLOWERA,
    CLOWERZ,
    CMINUS,
    CNINE,
    COBRACE,
    CCBRACE,
    CPLUS,
    CQUOTE,
    CSLASH,
    CSTAR,
    CTICK,
    CZERO,
    DATA_SIZE,
    FALSE,
    NULL,
    START_DATA,
    START_PROG,
    TRUE,
} from './constants';
import { getch, getquery, putch, putStr } from './io';
import { geti, getb, seti, setb } from './memory';
import { getReg, selectReg, setReg } from './registers';
import {
    pop,
    push,
    peek2,
    poke2,
    peek,
    poke,
    pokef,
    peekf,
    popf,
    pokef2,
    peekf2,
    sp,
    rp,
    rpush,
    rpop,
    setStacks,
} from './stacks';

let ip = 0;

let run: boolean;
let here: number;
let oldHere: number;

const EOF = 5;

let ex = '';
let token = 0;
let incMode = false;

const NOP = () => {};

const STORE = () => {
    seti(getReg(), pop());
};

const REG = () => {
    incMode = true;
    selectReg(token);
};

const PRINT = () => {
    ip++;
    token = getb(ip);
    while (token !== CQUOTE) {
        putch(token);
        ip++;
        token = getb(ip);
    }
};

const DUP = () => {
    push(peek());
};

const MUL = () => {
    const val = pop();
    poke(peek() * val);
};

const SWAP = () => {
    const i = peek();
    poke(peek2());
    poke2(i);
};

const MOD = () => {
    const val = pop();
    poke(peek() % val);
};

const AND = () => {
    const val = pop();
    poke(peek() & val);
};

const FLOAT = () => {
    ip++;
    token = getb(ip);
    if (token === CAPOS) {
        pokef(peek());
    } else if (token === CZERO) {
        poke(peekf());
    } else if (token === CDOT) {
        putStr(popf().toFixed(2));
    } else if (token === CPLUS) {
        const val = popf();
        pokef(peekf() + val);
    } else if (token === CMINUS) {
        const val = popf();
        pokef(peekf() - val);
    } else if (token === CSTAR) {
        const val = popf();
        pokef(peekf() * val);
    } else if (token === CSLASH) {
        const val = popf();
        pokef(peekf() / val);
    }
};

const IF = () => {
    if (pop() === FALSE) {
        ip++;
        token = getb(ip);
        while (token !== CCPAREN) {
            ip++;
            token = getb(ip);
        }
    }
};

const ADD = () => {
    if (!incMode) {
        const val = pop();
        poke(peek() + val);
    } else {
        setReg(getReg() + 1);
    }
};

const EMIT = () => {
    putch(pop());
};

const NEGATE = () => {
    poke(-peek());
};

const SUB = () => {
    if (!incMode) {
        const val = pop();
        poke(peek() - val);
    } else {
        setReg(getReg() - 1);
    }
};

const DOT = () => {
    putStr(pop().toString());
};

const DIV = () => {
    const val = pop();
    poke(peek() / val);
};

const DIGIT = () => {
    let i = 0;
    while (token >= CZERO && token <= CNINE) {
        i = i * 10 + token - CZERO;
        ip++;
        token = getb(ip);
    }
    push(i);
    ip--;
};

const RSET = () => {
    setReg(pop());
};

const RGET = () => {
    push(getReg());
};

const LESS = () => {
    if (peek() > peek2()) {
        poke(TRUE);
    } else {
        poke(FALSE);
    }
};

const EQUAL = () => {
    if (peek() === peek2()) {
        poke(TRUE);
    } else {
        poke(FALSE);
    }
};

const GREATER = () => {
    if (peek() < peek2()) {
        poke(TRUE);
    } else {
        poke(FALSE);
    }
};

const FETCH = () => {
    push(geti(getReg()));
};

const OVER = () => {
    push(peek2());
};

const CALL = () => {
    rpush(ip);
    ip = geti(token);
    token = getb(ip);
    ip--;
};

const LOOP = () => {
    rpush(ip);
    if (peek() === FALSE) {
        ip++;
        token = getb(ip);
        while (token !== CCBRACK) {
            ip++;
            token = getb(ip);
        }
    }
};

const DROP = () => {
    pop();
};

const ENDLOOP = () => {
    if (pop() !== FALSE) {
        ip = geti(rp);
    } else {
        rpop();
    }
};

const KEY = () => {
    if (!getquery()) return true;
    let ch = getch();
    if (ch === EOF) {
        ch = 0;
    }
    push(ch);
};

const EXTERNAL = () => {
    ip++;
    while (getb(ip) !== CTICK) {
        ex += String.fromCharCode(getb(ip));
        ip++;
    }
    console.log(ex);
};

const DEF = () => {
    const defCode = getb(ip + 1);
    seti(defCode, ip + 2);
    while (token !== CCBRACE) {
        ip++;
        token = getb(ip);
    }
};

const OR = () => {
    const val = pop();
    poke(peek() | val);
};

const ENDDEF = () => {
    ip = rpop();
};

const NOT = () => {
    poke(~peek());
};

// prettier-ignore
const opcodes = [ 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, STORE, PRINT, DUP, SWAP, MOD, AND, FLOAT, 
    IF, NOP, MUL, ADD, EMIT, SUB, DOT, DIV, DIGIT, DIGIT, 
    DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, RSET, RGET, 
    LESS, EQUAL, GREATER, FETCH, OVER, CALL, CALL, CALL, CALL, CALL, 
    CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, 
    CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, 
    CALL, LOOP, DROP, ENDLOOP, KEY, NEGATE, EXTERNAL, REG, REG, REG, 
    REG, REG, REG, REG, REG, REG, REG, REG, REG, REG, 
    REG, REG, REG, REG, REG, REG, REG, REG, REG, REG, 
    REG, REG, REG, DEF, OR, ENDDEF, NOT, 
];

export const getPrompt = (): string => {
    let s = '';
    for (let i = 0; i < 4; i++) {
        s += `${geti(sp - 3 + i)} `;
    }
    return `${s}>`;
};

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
        if (restarting) ip--;
        token = getb(ip);
        const result = Boolean(opcodes[token]());
        if (token < CLOWERA) {
            incMode = false;
        } else if (token > CLOWERZ) {
            incMode = false;
        }
        restarting = false;
        ip++;
        if (result) return true;
    }
    return false;
};

export const interpret = async (text: string): Promise<void> => {
    let restore = true;
    for (const char of text) {
        const code = char.codePointAt(0);
        if (code === COBRACE) restore = false;
        setb(here++, code!);
    }
    setb(here++, NULL);
    ip = oldHere;
    await new Promise<void>((resolve) => {
        (function loop(restart = false) {
            const result = interpTick(restart);
            if (run && ip < here) setTimeout(() => loop(result));
            else resolve();
        })();
    });
    if (restore) {
        here = oldHere;
        ip = oldHere;
    }
    oldHere = here; 
    console.log({oldHere, here, ip});
};
