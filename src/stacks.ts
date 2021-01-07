import { TCELL } from './constants';
import { state } from './globals';
import { tget, tset, lastType } from './memory';
import { CellType } from './types';
import { formatCell } from './utils';

export const getStackPrompt = (): string => {
    let s = '';
    for (let i = 0; i < 4; i++) {
        const n = tget(state.sp + (i - 3) * TCELL);
        s += `${formatCell(n,lastType)} `;
    }
    return `${s}>`;
};

export const pop = (): number => {
    const val = tget(state.sp);
    state.sp -= TCELL;
    return val;
};
export const push = (value: number, cellType: CellType): void => {
    state.sp += TCELL;
    tset(state.sp, value, cellType);
};
export const peek = (): number => tget(state.sp);
export const poke = (value: number, cellType: CellType): void => tset(state.sp, value, cellType);
export const peek2 = (): number => tget(state.sp - TCELL);
export const poke2 = (value: number, cellType: CellType): void => tset(state.sp - TCELL, value, cellType);

export const rpop = (): number => {
    const val = tget(state.rp);
    state.rp -= TCELL;
    return val;
};
export const rpush = (value: number, cellType: CellType): void => {
    state.rp += TCELL;
    tset(state.rp, value, cellType);
};
export const rpeek = (): number => tget(state.rp);
export const rpoke = (value: number, cellType: CellType): void => tset(state.rp, value, cellType);
