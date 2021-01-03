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

// int32 (int) operations
export const geti = (offset: number): number => mem.getInt32(offset * CELL);
export const seti = (offset: number, value: number): void => {
    mem.setInt32(offset * CELL, value);
};

// int8 (byte) operations
export const getb = (offset: number): number => mem.getInt8(offset);
export const setb = (offset: number, value: number): void => {
    mem.setInt8(offset, value);
};

// float32 (float) operations
export const getf = (offset: number): number => mem.getFloat32(offset * CELL);
export const setf = (offset: number, value: number): void => {
    mem.setFloat32(offset * CELL, value);
};

// eslint-disable-next-line no-shadow
export enum TypeDef {
    int,
    float,
}
export let lastType: TypeDef = TypeDef.int;

export const tget = (offset: number): number => {
    lastType = mem.getInt8(offset);
    if (lastType === TypeDef.float) return mem.getFloat32(offset + 1);
    return mem.getInt32(offset + 1);
};
export const tset = (offset: number, value: number, typeDef: TypeDef): void => {
    lastType = typeDef;
    mem.setInt8(offset, typeDef);
    if (typeDef === TypeDef.float) return mem.setFloat32(offset + 1, value);
    return mem.setInt32(offset + 1, value);
};
