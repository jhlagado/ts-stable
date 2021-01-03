/* eslint-disable no-control-regex */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// prettier-ignore
import {
    CAPOS, CCBRACK, CCPAREN, CDOT, CLOWERA, CLOWERZ, 
    CMINUS, CNINE, COBRACE, CCBRACE, CPLUS, CQUOTE, 
    CSLASH, CSTAR, CTICK, CZERO, DATA_SIZE, FALSE, 
    NULL, START_DATA, START_PROG, TRUE,
} from './constants';

import { getch, getquery, putch, putStr } from './io';
import { geti, getb, seti, setb, TypeDef, lastType, binaryType, secondLastType } from './memory';
import { getReg, selectReg, setReg } from './registers';
import { setStacks, trpeek, trpop, trpush, tpoke, tpeek, tpop, tpush, tpeek2, tpoke2 } from './stacks';

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
        const y = tpop();
        const x = tpeek();
        tpoke(x + y, binaryType);
    } else {
        setReg(getReg() + 1);
    }
};

const AND = () => {
    const val = tpop();
    tpoke(tpeek() & val);
};

const CALL = () => {
    trpush(ip);
    ip = geti(token);
    if (ip === 0) {
        ip = trpop();
        return;
    }
    token = getb(ip);
    ip--;
};

const DEF = () => {
    const defCode = getb(ip + 1);
    seti(defCode, ip + 2);
    while (token !== CCBRACE) {
        ip++;
        token = getb(ip);
    }
};

const DIV = () => {
    const y = tpop();
    const x = tpeek();
    tpoke(x / y, binaryType);
};

const DOT = () => {
    const val = tpop();
    putStr(lastType === TypeDef.float ? val.toFixed(2) : val.toString());
};

const DROP = () => {
    tpop();
};

const DUP = () => {
    const val = tpeek();
    tpush(val, lastType);
};

const DIGIT = () => {
    let i = 0;
    while (token >= CZERO && token <= CNINE) {
        i = i * 10 + token - CZERO;
        ip++;
        token = getb(ip);
    }
    tpush(i);
    ip--;
};

const EMIT = () => {
    putch(tpop());
};

const ENDDEF = () => {
    ip = trpop();
};

const ENDLOOP = () => {
    if (tpop() !== FALSE) {
        ip = trpeek();
    } else {
        trpop();
    }
};

const EQUAL = () => {
    if (tpeek() === tpeek2()) {
        tpoke(TRUE);
    } else {
        tpoke(FALSE);
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
    tpush(geti(getReg()));
};

const FLOAT = () => {
    ip++;
    token = getb(ip);
    if (token === CAPOS) {
        tpoke(tpeek(), TypeDef.float);
    } else if (token === CZERO) {
        tpoke(tpeek());
    }
};

const GREATER = () => {
    if (tpeek() < tpeek2()) {
        tpoke(TRUE);
    } else {
        tpoke(FALSE);
    }
};

const IF = () => {
    if (tpop() === FALSE) {
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
    tpush(ch);
};

const LESS = () => {
    if (tpeek() > tpeek2()) {
        tpoke(TRUE);
    } else {
        tpoke(FALSE);
    }
};

const LOOP = () => {
    trpush(ip);
    if (tpeek() === FALSE) {
        ip++;
        token = getb(ip);
        while (token !== CCBRACK) {
            ip++;
            token = getb(ip);
        }
    }
};

const MOD = () => {
    const val = tpop();
    tpoke(tpeek() % val);
};

const MUL = () => {
    const y = tpop();
    const x = tpeek();
    tpoke(x * y, binaryType);
};

const NEGATE = () => {
    tpoke(-tpeek(), lastType);
};

const NOP = () => {};

const NOT = () => {
    tpoke(~tpeek());
};

const OR = () => {
    const val = tpop();
    tpoke(tpeek() | val);
};

const OVER = () => {
    tpush(tpeek2(), lastType);
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
    setReg(tpop());
};

const RGET = () => {
    tpush(getReg());
};

const SUB = () => {
    if (!incMode) {
        const y = tpop();
        const x = tpeek();
        tpoke(x - y, binaryType);
    } else {
        setReg(getReg() - 1);
    }
};

const STORE = () => {
    seti(getReg(), tpop());
};

const SWAP = () => {
    const i = tpeek();
    tpoke(tpeek2(), lastType);
    tpoke2(i, secondLastType);
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
