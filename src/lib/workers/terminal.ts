import init, { run_command } from 'timo_pruesse_wasm_terminal';

import type { TerminalMessage, TerminalResultMessage } from './types';

const wasm = init();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const worker = self as any;

worker.addEventListener('message', async (event: MessageEvent<TerminalMessage>) => {
	const {
		data: { command }
	} = event;

	await wasm;

	try {
		const result = run_command(command);
		worker.postMessage({ result } as TerminalResultMessage);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';

		worker.postMessage({
			result: null,
			error: {
				message: `timo_wasm: ${command} failed: ${errorMessage}`
			}
		} as TerminalResultMessage);
	}
});

export {};
