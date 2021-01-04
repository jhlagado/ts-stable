import { CellType } from './types';

export const asBool = (b: boolean): number => (b ? -1 : 0);

export const formatCell = (value: number, cellType: CellType): string => {
    if (cellType === CellType.float) {
        return value.toFixed(2).replace(/0*$/, '').replace(/\.$/, '.0');
    }
    return value.toString();
};

export const escapeHTML = (text: string): string => {
    return text.replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;').replaceAll(/"/g, '&quot;');
};
