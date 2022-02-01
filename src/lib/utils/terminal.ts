import TerminalWorker from '$lib/workers/terminal?worker';
import type { TerminalCommandType, TerminalMessage } from '$lib/workers/types';

let worker: Worker;

export async function runCommand<T>(
	command: TerminalCommandType,
	args: Array<string | number>
): Promise<T> {
	if (!worker) {
		worker = new TerminalWorker();
	}

	return new Promise((resolve, reject) => {
		worker.postMessage({ command, args } as TerminalMessage);

		worker.onmessage = (event: MessageEvent) => {
			if (event.data.error) {
				reject(event.data.error);
			}

			resolve(event.data.result);
		};
	});
}
