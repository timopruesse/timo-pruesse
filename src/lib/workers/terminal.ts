import init, { add } from 'timo_pruesse_wasm_terminal';

const wasm = init();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const worker = self as any;

worker.addEventListener('message', async (event: MessageEvent) => {
	const {
		data: { number1, number2 }
	} = event;

	await wasm;

	worker.postMessage(`Result = ${add(number1, number2)}`);
});

export {};
