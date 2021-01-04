import { TCELL } from './constants';
import { tget, tset } from './memory';
import { CellType } from './types';

let selectedReg = 0;

export const selectReg = (reg: number): void => {
    selectedReg = reg;
};
export const getReg = (): number => tget(selectedReg * TCELL);
export const setReg = (value: number, cellType: CellType): void => tset(selectedReg * TCELL, value, cellType);
