// prettier-ignore
import {
    CAPOS, CNINE, CCBRACE, CQUOTE, 
    CTICK, CZERO, FALSE, 
    TRUE, TCELL, CDOT, CCPAREN, CCBRACK,
} from './constants';

import { getch, getquery, putch, putStr } from './io';
import { getb, lastType, binaryType, secondLastType, tget, tset } from './memory';
import { getReg, selectReg, setReg } from './registers';
import { rpeek, rpop, rpush, poke, peek, pop, push, peek2, poke2 } from './stacks';
import { CellType } from './types';
import { formatCell } from './utils';

export let ip = 0;
export let incMode = false;
export let token = 0;

const EOF = 5;

let ex = '';

export const setIP = (ip0: number): void => {
    ip = ip0;
};

export const setIncMode = (incMode0: boolean): void => {
    incMode = incMode0;
};

export const setToken = (token0: number): void => {
    token = token0;
};

const ADD = (): void => {
    if (!incMode) {
        const y = pop();
        const x = peek();
        poke(x + y, binaryType);
    } else {
        setReg(getReg() + 1, lastType);
    }
};

const AND = (): void => {
    const val = pop();
    poke(peek() & val, CellType.int);
};

const CALL = (): void => {
    rpush(ip, CellType.int);
    ip = tget(token * TCELL);
    if (ip === 0) {
        ip = rpop();
        return;
    }
    token = getb(ip);
    ip--;
};

const DEF = (): void => {
    const defCode = getb(ip + 1);
    tset(defCode * TCELL, ip + 2, CellType.int);
    while (token !== CCBRACE) {
        ip++;
        token = getb(ip);
    }
};

const DIV = (): void => {
    const y = pop();
    const x = peek();
    poke(x / y, binaryType);
};

const DOT = (): void => {
    const val = pop();
    putStr(formatCell(val, lastType));
};

const DROP = (): void => {
    pop();
};

const DUP = (): void => {
    const val = peek();
    push(val, lastType);
};

const DIGIT = (): void => {
    let s = '';
    let cellType = CellType.int;
    while (token === CDOT || (token >= CZERO && token <= CNINE)) {
        if (token === CDOT) cellType = CellType.float;
        s += String.fromCharCode(token);
        ip++;
        token = getb(ip);
    }
    const i = Number(s);
    push(i, cellType);
    ip--;
};

const EMIT = (): void => {
    putch(pop());
};

const ENDDEF = (): void => {
    ip = rpop();
};

const ENDLOOP = (): void => {
    if (pop() !== FALSE) {
        ip = rpeek();
    } else {
        rpop();
    }
};

const EQUAL = (): void => {
    if (peek() === peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
    }
};

const EXTERNAL = (): void => {
    ip++;
    while (getb(ip) !== CTICK) {
        ex += String.fromCharCode(getb(ip));
        ip++;
    }
    console.log(ex);
};

const FETCH = (): void => {
    push(tget(getReg() * TCELL), lastType);
};

const FLOAT = (): void => {
    ip++;
    token = getb(ip);
    if (token === CAPOS) {
        poke(peek(), CellType.float);
    } else if (token === CZERO) {
        poke(peek(), CellType.int);
    }
};

const GREATER = (): void => {
    if (peek() < peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
    }
};

const IF = (): void => {
    if (pop() === FALSE) {
        ip++;
        token = getb(ip);
        while (token !== CCPAREN) {
            ip++;
            token = getb(ip);
        }
    }
};

const KEY = (): void | boolean => {
    if (!getquery()) return true;
    let ch = getch();
    if (ch === EOF) {
        ch = 0;
    }
    push(ch, CellType.int);
};

const LESS = (): void => {
    if (peek() > peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
    }
};

const LOOP = (): void => {
    rpush(ip, CellType.int);
    if (peek() === FALSE) {
        ip++;
        token = getb(ip);
        while (token !== CCBRACK) {
            ip++;
            token = getb(ip);
        }
    }
};

const MOD = (): void => {
    const val = pop();
    poke(peek() % val, CellType.int);
};

const MUL = (): void => {
    const y = pop();
    const x = peek();
    poke(x * y, binaryType);
};

const NEGATE = (): void => {
    poke(-peek(), lastType);
};

const NOP = (): void => {};

const NOT = (): void => {
    poke(~peek(), lastType);
};

const OR = (): void => {
    const val = pop();
    poke(peek() | val, CellType.int);
};

const OVER = (): void => {
    push(peek2(), lastType);
};

const PRINT = (): void => {
    ip++;
    token = getb(ip);
    while (token !== CQUOTE) {
        putch(token);
        ip++;
        token = getb(ip);
    }
};

const REG = (): void => {
    incMode = true;
    selectReg(token);
};

const RSET = (): void => {
    setReg(pop(), lastType);
};

const RGET = (): void => {
    push(getReg(), lastType);
};

const SUB = (): void => {
    if (!incMode) {
        const y = pop();
        const x = peek();
        poke(x - y, binaryType);
    } else {
        setReg(getReg() - 1, lastType);
    }
};

const STORE = (): void => {
    tset(getReg(), pop(), lastType);
};

const SWAP = (): void => {
    const i = peek();
    poke(peek2(), lastType);
    poke2(i, secondLastType);
};

// prettier-ignore
export const opcodes = [ 
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
