import { NULL } from './constants';

export let inputBuffer = '';
export let outputBuffer = '';
export let lastKeyCode = 0;

export const setInputBuffer = (value: string): void => {
    inputBuffer = value;
};

export const appendInputBuffer = (value: string): void => {
    inputBuffer += value;
};

export const setOutputBuffer = (value: string): void => {
    outputBuffer = value;
};

export const getquery = (): boolean => inputBuffer.length > 0;

export const getch = (): number => {
    if (inputBuffer.length === 0) return NULL;
    const ch = inputBuffer[0];
    inputBuffer = inputBuffer.slice(1);
    return ch.codePointAt(0)!;
};

export const putch = (value: number): void => {
    outputBuffer += String.fromCodePoint(value);
};

export const putStr = (value: string): void => {
    outputBuffer += value;
};

export const setLastKeyCode = (keyCode:number):void => {
    lastKeyCode = keyCode;
};