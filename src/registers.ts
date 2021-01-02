import { geti, seti } from './memory';

let selectedReg = 0;

export const selectReg = (reg: number): void => {
    selectedReg = reg;
};
export const getReg = (): number => geti(selectedReg);
export const setReg = (value: number): void => seti(selectedReg, value);
