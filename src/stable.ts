// prettier-ignore
import {
    CAPOS, CCBRACK, CCPAREN, CLOWERA, CLOWERZ, 
    CNINE, COBRACE, CCBRACE, CQUOTE, 
    CTICK, CZERO, DATA_SIZE, FALSE, 
    NULL, START_DATA, START_PROG, TRUE, TCELL, CDOT,
} from './constants';

import { getch, getquery, putch, putStr } from './io';
import { getb, setb, CellType, lastType, binaryType, secondLastType, tget, tset } from './memory';
import { getReg, selectReg, setReg } from './registers';
import { setStacks, rpeek, rpop, rpush, poke, peek, pop, push, peek2, poke2 } from './stacks';
import { formatCell } from './utils';

let ip = 0;

let run: boolean;
let here: number;
let oldHere: number;

const EOF = 5;

let ex = '';
let token = 0;
let incMode = false;

const ADD = () => {
    if (!incMode) {
        const y = pop();
        const x = peek();
        poke(x + y, binaryType);
    } else {
        setReg(getReg() + 1, lastType);
    }
};

const AND = () => {
    const val = pop();
    poke(peek() & val, CellType.int);
};

const CALL = () => {
    rpush(ip, CellType.int);
    ip = tget(token * TCELL);
    if (ip === 0) {
        ip = rpop();
        return;
    }
    token = getb(ip);
    ip--;
};

const DEF = () => {
    const defCode = getb(ip + 1);
    tset(defCode * TCELL, ip + 2, CellType.int);
    while (token !== CCBRACE) {
        ip++;
        token = getb(ip);
    }
};

const DIV = () => {
    const y = pop();
    const x = peek();
    poke(x / y, binaryType);
};

const DOT = () => {
    const val = pop();
    putStr(formatCell(val,lastType));
};

const DROP = () => {
    pop();
};

const DUP = () => {
    const val = peek();
    push(val, lastType);
};

const DIGIT = () => {
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

const EMIT = () => {
    putch(pop());
};

const ENDDEF = () => {
    ip = rpop();
};

const ENDLOOP = () => {
    if (pop() !== FALSE) {
        ip = rpeek();
    } else {
        rpop();
    }
};

const EQUAL = () => {
    if (peek() === peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
    }
};

const EXTERNAL = () => {
    ip++;
    while (getb(ip) !== CTICK) {
        ex += String.fromCharCode(getb(ip));
        ip++;
    }
    console.log(ex);
};

const FETCH = () => {
    push(tget(getReg() * TCELL), lastType);
};

const FLOAT = () => {
    ip++;
    token = getb(ip);
    if (token === CAPOS) {
        poke(peek(), CellType.float);
    } else if (token === CZERO) {
        poke(peek(), CellType.int);
    }
};

const GREATER = () => {
    if (peek() < peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
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

const KEY = () => {
    if (!getquery()) return true;
    let ch = getch();
    if (ch === EOF) {
        ch = 0;
    }
    push(ch, CellType.int);
};

const LESS = () => {
    if (peek() > peek2()) {
        poke(TRUE, CellType.int);
    } else {
        poke(FALSE, CellType.int);
    }
};

const LOOP = () => {
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

const MOD = () => {
    const val = pop();
    poke(peek() % val, CellType.int);
};

const MUL = () => {
    const y = pop();
    const x = peek();
    poke(x * y, binaryType);
};

const NEGATE = () => {
    poke(-peek(), lastType);
};

const NOP = () => {};

const NOT = () => {
    poke(~peek(), lastType);
};

const OR = () => {
    const val = pop();
    poke(peek() | val, CellType.int);
};

const OVER = () => {
    push(peek2(), lastType);
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

const REG = () => {
    incMode = true;
    selectReg(token);
};

const RSET = () => {
    setReg(pop(), lastType);
};

const RGET = () => {
    push(getReg(), lastType);
};

const SUB = () => {
    if (!incMode) {
        const y = pop();
        const x = peek();
        poke(x - y, binaryType);
    } else {
        setReg(getReg() - 1, lastType);
    }
};

const STORE = () => {
    tset(getReg(), pop(), lastType);
};

const SWAP = () => {
    const i = peek();
    poke(peek2(), lastType);
    poke2(i, secondLastType);
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

export const interpReset = (): void => {
    for (let i = START_DATA; i < DATA_SIZE; i++) {
        setb(i, 0);
    }
    // setb(0, CCBRACE); // dummy procedure with just } i.e. ENDDEF
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
    let save = false; // save text if it contains a procedure definition
    for (const char of text) {
        const code = char.codePointAt(0);
        if (code === COBRACE) save = true;
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
    if (!save) {
        here = oldHere;
    }
    oldHere = here;
};
