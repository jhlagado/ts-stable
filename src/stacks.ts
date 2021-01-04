import { TCELL } from './constants';
import { tget, tset, lastType } from './memory';
import { CellType } from './types';
import { formatCell } from './utils';

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
        s += `${formatCell(n,lastType)} `;
    }
    return `${s}>`;
};

export const pop = (): number => {
    const val = tget(sp);
    sp -= TCELL;
    return val;
};
export const push = (value: number, cellType: CellType): void => {
    sp += TCELL;
    tset(sp, value, cellType);
};
export const peek = (): number => tget(sp);
export const poke = (value: number, cellType: CellType): void => tset(sp, value, cellType);
export const peek2 = (): number => tget(sp - TCELL);
export const poke2 = (value: number, cellType: CellType): void => tset(sp - TCELL, value, cellType);

export const rpop = (): number => {
    const val = tget(rp);
    rp -= TCELL;
    return val;
};
export const rpush = (value: number, cellType: CellType): void => {
    rp += TCELL;
    tset(rp, value, cellType);
};
export const rpeek = (): number => tget(rp);
export const rpoke = (value: number, cellType: CellType): void => tset(rp, value, cellType);
