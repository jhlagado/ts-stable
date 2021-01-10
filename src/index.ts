import 'regenerator-runtime/runtime';
import { appendInputBuffer, inputBuffer, outputBuffer, setLastKeyCode, setOutputBuffer } from './io';
import { interpReset, interpret } from './interpreter';
import { getStackPrompt } from './stacks';
import { escapeHTML } from './utils';

const history: string[] = [];
let historyIndex = 0;

const setPrompt = (text: string) => {
    const prompt = document.getElementById('prompt');
    prompt!.innerText = text;
};

export const log = (message: string): void => {
    const output = document.getElementById('output');
    output!.innerHTML += `<div class='log'><p>${message}</p></div>`;
    const screen = document.getElementById('screen');
    screen!.scrollTop = screen!.scrollHeight;
};

export const log2 = (message: string): void => {
    const output = document.getElementById('output');
    output!.innerText += `<div class='log'><p>${message}</p></div>`;
    const screen = document.getElementById('screen');
    screen!.scrollTop = screen!.scrollHeight;
};

const inputSource = document.getElementById('input_source')!;
inputSource.onblur = () => {
    setTimeout(() => inputSource.focus(), 5000); // to allow selecting text put this on a 5 second timer
};

inputSource.addEventListener('keyup', async (event: KeyboardEvent) => {
    event.preventDefault();
    const { key } = event;
    setLastKeyCode(key.codePointAt(0)!);
    if (key === 'ArrowUp') {
        if (history.length > historyIndex) {
            (inputSource as any).value = history[historyIndex++];
        }
    } else if (key === 'ArrowDown') {
        if (historyIndex > 0) {
            (inputSource as any).value = history[--historyIndex];
        }
    } else if (key === 'Enter') {
        const text = (inputSource as any).value;
        history.unshift(text);
        historyIndex = 0;
        (inputSource as any).value = '';
        appendInputBuffer(text);
    }
});

const loop = () => {
    setTimeout(loop);
    if (outputBuffer.length > 0) {
        log(outputBuffer);
        setOutputBuffer('');
    }
};
loop();

setOutputBuffer('');
log(
    `TS-STABLE <a href="https://github.com/jhlagado/ts-stable"
        target="_blank" 
        title="An implementation of Sandor Schneider's STABLE language in Typescript by John Hardy ">(?)</a>`,
);
interpReset();
setPrompt(getStackPrompt());

const loop2 = async () => {
    const oldPrompt = getStackPrompt();
    const oldInputBuffer = inputBuffer;
    if (await interpret()) {
        log(`${oldPrompt} ${escapeHTML(oldInputBuffer)}`);
        setPrompt(getStackPrompt());
    }
    setTimeout(loop2);
};
loop2();
