import { CellType } from './memory';

export const asBool = (b: boolean): number => (b ? -1 : 0);

export const formatCell = (value: number, cellType: CellType): string =>
    cellType === CellType.float ? value.toFixed(2).replace(/\.?0*$/, '') : value.toString();
