import { MEM_START, MEM_SIZE, CELL, DEBUG } from './constants';
import { Ptr } from './types';

export const buffer = new ArrayBuffer(MEM_SIZE);
export const mem = new DataView(buffer);

export let asmPtr = MEM_START;

export const setAsmPtr = (value: Ptr): void => {
    asmPtr = value;
};

export const def8 = (value: number, info: string): Ptr => {
    const result = asmPtr;
    if (DEBUG) console.log(`${info} starts: ${result} value: ${value}`);
    mem.setUint8(0, value);
    setAsmPtr(asmPtr + 1);
    return result;
};

export const def16 = (value: number, info: string): Ptr => {
    const result = asmPtr;
    if (DEBUG) console.log(`${info} starts: ${result} value: ${value}`);
    mem.setUint16(0, value);
    setAsmPtr(asmPtr + 2);
    return result;
};

export const def32 = (value: number, info: string): Ptr => {
    const result = asmPtr;
    if (DEBUG) console.log(`${info} starts: ${result} value: ${value}`);
    mem.setUint32(asmPtr, value);
    setAsmPtr(asmPtr + 4);
    return result;
};

export const defStr = (str: string, info: string): Ptr => {
    const result = asmPtr;
    if (DEBUG) console.log(`${info} starts: ${result} size: ${str.length}`);
    const bytes = new TextEncoder().encode(str);
    const { length } = bytes;
    for (let i = 0; i < length; i++) {
        mem.setUint8(asmPtr, bytes[i]);
        setAsmPtr(asmPtr + 1);
    }
    return result;
};

export const defSpace = (size: number, info: string): Ptr => {
    const result = asmPtr;
    if (DEBUG) console.log(`${info} starts: ${result} size: ${size} cells: ${size / CELL}`);
    setAsmPtr(asmPtr + size);
    return result;
};

export const geti8 = (offset: number): number => mem.getInt8(offset);

export const seti8 = (offset: number, value: number): void => {
    mem.setInt8(offset, value);
};

export const updi8 = (offset: number, func: (oldValue: number) => number): void => {
    seti8(offset, func(geti8(offset)));
};

export const geti32 = (offset: number): number => mem.getInt32(offset * CELL);

export const seti32 = (offset: number, value: number): void => {
    mem.setInt32(offset * CELL, value);
};

export const updi32 = (offset: number, func: (oldValue: number) => number): void => {
    seti32(offset, func(geti32(offset)));
};

export const getf32 = (offset: number): number => mem.getFloat32(offset * CELL);

export const setf32 = (offset: number, value: number): void => {
    mem.setFloat32(offset * CELL, value);
};

export const updf32 = (offset: number, func: (oldValue: number) => number): void => {
    setf32(offset, func(getf32(offset)));
};
