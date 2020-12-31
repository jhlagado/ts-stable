/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { DATA_SIZE, FALSE, NULL, START_DATA, START_PROG, TRUE } from './constants';
import { getch, getquery, putch, putStr } from './io';
import { getf32, geti32, geti8, setf32, seti32, seti8, updf32, updi32 } from './memory';

let run;
let here;

const EOF = 5;

const CZERO = '0'.charCodeAt(0);
const CNINE = '9'.charCodeAt(0);
const CQUOTE = '"'.charCodeAt(0);
// const CAPOS = "'".charCodeAt(0);
// const CDOT = '.'.charCodeAt(0);
// const CPLUS = '+'.charCodeAt(0);
// const CMINUS = '-'.charCodeAt(0);
// const CSTAR = '*'.charCodeAt(0);
// const CSLASH = '/'.charCodeAt(0);
const CCPAREN = ')'.charCodeAt(0);
const CCBRACK = ']'.charCodeAt(0);
const COBRACE = '{'.charCodeAt(0);
const CCBRACE = '}'.charCodeAt(0);
const CLOWERA = 'a'.charCodeAt(0);
const CLOWERZ = 'z'.charCodeAt(0);
const CTICK = '`'.charCodeAt(0);

let ex = '';

let token = 0;
let incMode = false;
let selectedReg = 0;
let rp = 0;
let ip = 0;
let sp = 0;

const NOP = () => {
    // console.log('nop');
};

const STORE = () => {
    seti32(geti32(selectedReg), geti32(sp));
    sp--;
};

const REG = () => {
    incMode = true;
    selectedReg = token;
};

const PRINT = () => {
    ip++;
    token = geti8(ip);
    while (token !== CQUOTE) {
        putch(token);
        ip++;
        token = geti8(ip);
    }
};

const DUP = () => {
    sp++;
    seti32(sp, geti32(sp - 1));
};

const MUL = () => {
    updi32(sp - 1, (val) => val * geti32(sp));
    sp--;
};

const SWAP = () => {
    const i = geti32(sp);
    seti32(sp, geti32(sp - 1));
    seti32(sp - 1, i);
};

const MOD = () => {
    updi32(sp - 1, (val) => val % geti32(sp));
    sp--;
};

const AND = () => {
    updi32(sp - 1, (val) => val & geti32(sp));
    sp--;
};

const EXTERNAL = () => {
    // ip++;
    // token = geti8(ip);
    // if (token === CAPOS) {
    //     setf32(sp, geti32(sp));
    // } else if (token === CZERO) {
    //     seti32(sp, getf32(sp));
    // } else if (token === CDOT) {
    //     putStr(getf32(sp).toString());
    //     sp--;
    // } else if (token === CPLUS) {
    //     updf32(sp - 1, (val) => val + getf32(sp));
    //     sp--;
    // } else if (token === CMINUS) {
    //     updf32(sp - 1, (val) => val - getf32(sp));
    //     sp--;
    // } else if (token === CSTAR) {
    //     updf32(sp - 1, (val) => val * getf32(sp));
    //     sp--;
    // } else if (token === CSLASH) {
    //     updf32(sp - 1, (val) => val / getf32(sp));
    //     sp--;
    // }
};

const IF = () => {
    if (geti32(sp) === FALSE) {
        sp--;
        ip++;
        token = geti8(ip);
        while (token !== CCPAREN) {
            ip++;
            token = geti8(ip);
        }
    } else {
        sp--;
    }
};
const ADD = () => {
    if (!incMode) {
        updi32(sp - 1, (val) => val + geti32(sp));
        sp--;
    } else {
        updi32(selectedReg, (val) => val + 1);
    }
};

const EMIT = () => {
    putch(geti32(sp));
    sp--;
};

const NEGATE = () => {
    updi32(sp, (val) => -val);
};

const SUB = () => {
    if (!incMode) {
        updi32(sp - 1, (val) => val - geti32(sp));
        sp--;
    } else {
        updi32(selectedReg, (val) => val - 1);
    }
};

const DOT = () => {
    putStr(geti32(sp).toString());
    sp--;
};

const DIV = () => {
    updi32(sp - 1, (val) => val / geti32(sp));
    sp--;
};

const DIGIT = () => {
    let i = 0;
    while (token >= CZERO && token <= CNINE) {
        i = i * 10 + token - CZERO;
        ip++;
        token = geti8(ip);
    }
    sp++;
    seti32(sp, i);
    ip--;
};

const RSET = () => {
    seti32(selectedReg, geti32(sp));
    sp--;
};

const RGET = () => {
    sp++;
    seti32(sp, geti32(selectedReg));
};

const LESS = () => {
    if (geti32(sp) > geti32(sp - 1)) {
        seti32(sp, TRUE);
    } else {
        seti32(sp, FALSE);
    }
};

const EQUAL = () => {
    if (geti32(sp) === geti32(sp - 1)) {
        seti32(sp, TRUE);
    } else {
        seti32(sp, FALSE);
    }
};

const GREATER = () => {
    if (geti32(sp) < geti32(sp - 1)) {
        seti32(sp, TRUE);
    } else {
        seti32(sp, FALSE);
    }
};

const FETCH = () => {
    sp++;
    seti32(sp, geti32(geti32(selectedReg)));
};

const OVER = () => {
    seti32(sp + 1, geti32(sp - 1));
    sp++;
};

const CALL = () => {
    rp++;
    seti32(rp, ip);
    ip = geti32(token);
    token = geti8(ip);
    ip--;
};

const LOOP = () => {
    rp++;
    seti32(rp, ip);
    if (geti32(sp) === FALSE) {
        ip++;
        token = geti8(ip);
        while (token !== CCBRACK) {
            ip++;
            token = geti8(ip);
        }
    }
};

const DROP = () => {
    sp--;
};

const ENDLOOP = () => {
    if (geti32(sp) !== FALSE) {
        ip = geti32(rp);
    } else {
        rp--;
    }
    sp--;
};

const KEY = () => {
    if (!getquery()) return true;
    let ch = getch();
    if (ch === EOF) {
        ch = 0;
    }
    sp++;
    seti32(sp, ch);
};

const CHAR = () => {
    ip++;
    while (geti8(ip) !== CTICK) {
        ex += String.fromCharCode(geti8(ip));
        ip++;
    }
    console.log(ex);
};

const DEF = () => {
    const defCode = geti8(ip + 1);
    seti32(defCode, ip + 2);
    while (token !== CCBRACE) {
        ip++;
        token = geti8(ip);
    }
};

const OR = () => {
    updi32(sp - 1, (val) => val | geti32(sp));
    sp--;
};

const ENDDEF = () => {
    ip = geti32(rp);
    rp--;
};

const NOT = () => {
    updi32(sp, (val) => ~val);
};

// prettier-ignore
const q = [ 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, NOP, 
    NOP, NOP, NOP, STORE, PRINT, DUP, SWAP, MOD, AND, EXTERNAL, 
    IF, NOP, MUL, ADD, EMIT, SUB, DOT, DIV, DIGIT, DIGIT, 
    DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, DIGIT, RSET, RGET, 
    LESS, EQUAL, GREATER, FETCH, OVER, CALL, CALL, CALL, CALL, CALL, 
    CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, 
    CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, CALL, 
    CALL, LOOP, DROP, ENDLOOP, KEY, NEGATE, CHAR, REG, REG, REG, 
    REG, REG, REG, REG, REG, REG, REG, REG, REG, REG, 
    REG, REG, REG, REG, REG, REG, REG, REG, REG, REG, 
    REG, REG, REG, DEF, OR, ENDDEF, NOT, 
];

export const getPrompt = (): string => {
    // console.log({sp, x: geti32(sp)});
    let s = '';
    for (let i = 0; i < 4; i++) {
        s += `${geti32(sp - 3 + i)} `;
        // console.log({i, x: geti32(sp - 3 + i)});
    }
    return `${s}>`;
};

export const interpReset = (): void => {
    for (let i = START_DATA; i < DATA_SIZE; i++) {
        seti8(i, 0);
    }
    here = START_PROG;
    sp = 140;
    rp = 20;
    run = true;
};

const interpTick = (restart?: boolean): boolean => {
    let restarting = restart;
    while (run && ip < here) {
        if (restarting) ip--;
        token = geti8(ip);
        console.log(token);
        const result = Boolean(q[token]());
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
    const oldHere = here;
    let restore = true;
    for (const char of text) {
        const code = char.codePointAt(0);
        if (code === COBRACE) restore = true;
        seti8(here++, code!);
    }
    seti8(here++, NULL);
    ip = oldHere;
    await new Promise<void>((resolve) => {
        (function loop(restart = false) {
            const result = interpTick(restart);
            if (run && ip < here) setTimeout(() => loop(result));
            else resolve();
        })();
    });
    if (restore) here = oldHere;
};
