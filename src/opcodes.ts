// prettier-ignore
import {
    CAPOS, CNINE, CCBRACE, CQUOTE, 
    CTICK, CZERO, FALSE, 
    TRUE, TCELL, CDOT, CCPAREN, CCBRACK,
} from './constants';
import { state } from './globals';

import { getch, getquery, putch, putStr } from './io';
import { getb, lastType, binaryType, secondLastType, tget, tset } from './memory';
import { getReg, selectReg, setReg } from './registers';
import { rpeek, rpop, rpush, poke, peek, pop, push, peek2, poke2 } from './stacks';
import { CellType } from './types';
import { formatCell } from './utils';

const EOF = 5;
let ex = '';

const ADD = (): void => {
    if (!state.incMode) {
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
    rpush(state.ip, CellType.int);
    state.ip = tget(state.token * TCELL);
    if (state.ip === 0) {
        state.ip = rpop();
        return;
    }
    state.token = getb(state.ip);
    state.ip--;
};

const DEF = (): void => {
    const defCode = getb(state.ip + 1);
    tset(defCode * TCELL, state.ip + 2, CellType.int);
    while (state.token !== CCBRACE) {
        state.ip++;
        state.token = getb(state.ip);
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
    while (state.token === CDOT || (state.token >= CZERO && state.token <= CNINE)) {
        if (state.token === CDOT) cellType = CellType.float;
        s += String.fromCharCode(state.token);
        state.ip++;
        state.token = getb(state.ip);
    }
    const i = Number(s);
    push(i, cellType);
    state.ip--;
};

const EMIT = (): void => {
    putch(pop());
};

const ENDDEF = (): void => {
    state.ip = rpop();
};

const ENDLOOP = (): void => {
    if (pop() !== FALSE) {
        state.ip = rpeek();
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
    state.ip++;
    while (getb(state.ip) !== CTICK) {
        ex += String.fromCharCode(getb(state.ip));
        state.ip++;
    }
    console.log(ex);
};

const FETCH = (): void => {
    push(tget(getReg() * TCELL), lastType);
};

const FLOAT = (): void => {
    state.ip++;
    state.token = getb(state.ip);
    if (state.token === CAPOS) {
        poke(peek(), CellType.float);
    } else if (state.token === CZERO) {
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
        state.ip++;
        state.token = getb(state.ip);
        while (state.token !== CCPAREN) {
            state.ip++;
            state.token = getb(state.ip);
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
    rpush(state.ip, CellType.int);
    if (peek() === FALSE) {
        state.ip++;
        state.token = getb(state.ip);
        while (state.token !== CCBRACK) {
            state.ip++;
            state.token = getb(state.ip);
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
    state.ip++;
    state.token = getb(state.ip);
    while (state.token !== CQUOTE) {
        putch(state.token);
        state.ip++;
        state.token = getb(state.ip);
    }
};

const REG = (): void => {
    state.incMode = true;
    selectReg(state.token);
};

const RSET = (): void => {
    setReg(pop(), lastType);
};

const RGET = (): void => {
    push(getReg(), lastType);
};

const SUB = (): void => {
    if (!state.incMode) {
        const y = pop();
        const x = peek();
        poke(x - y, binaryType);
    } else {
        setReg(getReg() - 1, lastType);
    }
};

const STORE = (): void => {
    tset(getReg() * TCELL, pop(), lastType);
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
