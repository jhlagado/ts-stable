import { TCELL } from './constants';
import { TypeDef, tget, tset, lastType } from './memory';

export let sp = 0;
export let rp = 0;

export const setStacks = (sp0: number, rp0: number): void => {
    sp = sp0;
    rp = rp0;
};

export const getStackPrompt = (): string => {
    let s = '';
    for (let i = 0; i < 4; i++) {
        const n = tget(sp + (i - 3) * TCELL);
        s += lastType === TypeDef.float ? `${n.toFixed(2)} ` : `${n} `
    }
    return `${s}>`;
};

export const tpop = (): number => {
    const val = tget(sp);
    sp -= TCELL;
    return val;
};
export const tpush = (value: number, typeDef = TypeDef.int): void => {
    sp += TCELL;
    tset(sp, value, typeDef);
};
export const tpeek = (): number => tget(sp);
export const tpoke = (value: number, typeDef = TypeDef.int): void => tset(sp, value, typeDef);
export const tpeek2 = (): number => tget(sp - TCELL);
export const tpoke2 = (value: number, typeDef = TypeDef.int): void => tset(sp - TCELL, value, typeDef);

export const trpop = (): number => {
    const val = tget(rp);
    rp -= TCELL;
    return val;
};
export const trpush = (value: number, typeDef = TypeDef.int): void => {
    rp += TCELL;
    tset(rp, value, typeDef);
};
export const trpeek = (): number => tget(rp);
export const trpoke = (value: number, typeDef = TypeDef.int): void => tset(rp, value, typeDef);
