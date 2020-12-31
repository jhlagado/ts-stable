import 'regenerator-runtime/runtime';
import { appendInputBuffer, outputBuffer, setOutputBuffer } from './io';
import { getPrompt, interpReset, interpret } from './stable';

const history: string[] = [];
let historyIndex = 0;

export const log = (message: string): void => {
    const output = document.getElementById('output');
    output!.innerHTML += `<div class='log'><p>${message}</p></div>`;
    const screen = document.getElementById('screen');
    screen!.scrollTop = screen!.scrollHeight;
};

const inputSource = document.getElementById('input_source')!;
inputSource.onblur = () => {
    inputSource.focus();
};

inputSource.addEventListener('keyup', async (event: KeyboardEvent) => {
    event.preventDefault();
    console.log('key', event.key);
    if (event.key === 'ArrowUp') {
        if (history.length > historyIndex) {
            (inputSource as any).value = history[historyIndex++];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex > 0) {
            (inputSource as any).value = history[--historyIndex];
        }
    } else if (event.key === 'Enter') {
        const text = (inputSource as any).value;
        history.unshift(text);
        historyIndex = 0;
        (inputSource as any).value = '';
        appendInputBuffer(text);
        const oldPrompt = getPrompt();
        await interpret(text);
        log(`${oldPrompt} ${text}`);
        const prompt = document.getElementById('prompt');
        prompt!.innerText = getPrompt();
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
log('STABLE');
interpReset();
const prompt = document.getElementById('prompt');
prompt!.innerText = getPrompt();
