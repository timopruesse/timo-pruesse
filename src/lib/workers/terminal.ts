import init, { add } from 'timo_pruesse_wasm_terminal';
import { TerminalCommandType, TerminalCommandErrorType } from './types';

import type { TerminalMessage, TerminalResultMessage } from './types';

const wasm = init();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const commandMap: Record<TerminalCommandType, (...args: any[]) => any> = {
	[TerminalCommandType.Add]: add
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const worker = self as any;

worker.addEventListener('message', async (event: MessageEvent<TerminalMessage>) => {
	const {
		data: { command, args = [] }
	} = event;

	const commandHandler = commandMap[command];
	if (!commandHandler) {
		worker.postMessage({
			result: null,
			error: {
				type: TerminalCommandErrorType.InvalidCommand,
				message: `timo_wasm: Command not found: ${command}`
			}
		} as TerminalResultMessage);
		return;
	}

	await wasm;

	try {
		const result = commandHandler(...args);
		worker.postMessage({ result } as TerminalResultMessage);
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';

		worker.postMessage({
			result: null,
			error: {
				type: TerminalCommandErrorType.ExecutionError,
				message: `timo_wasm: ${command} failed: ${errorMessage}`
			}
		} as TerminalResultMessage);
	}
});

export {};
