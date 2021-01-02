import { geti, seti, getf, setf } from './memory';

/* eslint-disable prefer-const */
export let sp = 0;
export let rp = 0;

export const setStacks = (sp0: number, rp0: number):void => {
    sp = sp0;
    rp = rp0;
};

export const pop = (): number => geti(sp--);
export const push = (value: number): void => seti(++sp, value);
export const peek = (): number => geti(sp);
export const poke = (value: number): void => seti(sp, value);
export const peek2 = (): number => geti(sp - 1);
export const poke2 = (value: number): void => seti(sp - 1, value);

export const popf = (): number => getf(sp--);
export const pushf = (value: number): void => setf(++sp, value);
export const peekf = (): number => getf(sp);
export const pokef = (value: number): void => setf(sp, value);
export const peekf2 = (): number => getf(sp - 1);
export const pokef2 = (value: number): void => setf(sp - 1, value);

export const rpop = (): number => geti(rp--);
export const rpush = (value: number): void => seti(++rp, value);
export const rpeek = (): number => geti(rp);
export const rpoke = (value: number): void => seti(rp, value);
