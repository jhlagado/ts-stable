import { TCELL } from './constants';
import { CellType, tget, tset, lastType } from './memory';

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
        s += lastType === CellType.float ? `${n.toFixed(2)} ` : `${n} `;
    }
    return `${s}>`;
};

export const pop = (): number => {
    const val = tget(sp);
    sp -= TCELL;
    return val;
};
export const push = (value: number, typeDef: CellType): void => {
    sp += TCELL;
    tset(sp, value, typeDef);
};
export const peek = (): number => tget(sp);
export const poke = (value: number, typeDef: CellType): void => tset(sp, value, typeDef);
export const peek2 = (): number => tget(sp - TCELL);
export const poke2 = (value: number, typeDef: CellType): void => tset(sp - TCELL, value, typeDef);

export const rpop = (): number => {
    const val = tget(rp);
    rp -= TCELL;
    return val;
};
export const rpush = (value: number, typeDef: CellType): void => {
    rp += TCELL;
    tset(rp, value, typeDef);
};
export const rpeek = (): number => tget(rp);
export const rpoke = (value: number, typeDef: CellType): void => tset(rp, value, typeDef);
