import TerminalWorker from '$lib/workers/terminal?worker';
import type { TerminalMessage } from '$lib/workers/types';

let worker: Worker;

export async function runCommand<T>(command: string): Promise<T> {
	if (!worker) {
		worker = new TerminalWorker();
	}

	return new Promise((resolve, reject) => {
		worker.postMessage({ command } as TerminalMessage);

		worker.onmessage = (event: MessageEvent) => {
			if (event.data.error) {
				reject(event.data.error);
			}

			resolve(event.data.result);
		};
	});
}
