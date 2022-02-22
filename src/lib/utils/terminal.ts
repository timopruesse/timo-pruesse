import TerminalWorker from '$lib/workers/terminal?worker';
import type { TerminalMessage, TerminalResultMessage } from '$lib/workers/types';

let worker: Worker;

export async function runCommand(command: string): Promise<string> {
	if (!worker) {
		worker = new TerminalWorker();
	}

	return new Promise((resolve, reject) => {
		worker.postMessage({ command } as TerminalMessage);

		worker.onmessage = (event: MessageEvent<TerminalResultMessage>) => {
			if (event.data.error) {
				reject(event.data.error);
			}

			resolve(event.data.result);
		};
	});
}
