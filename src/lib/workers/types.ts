export interface TerminalMessage {
	command: string;
}

interface TerminalError {
	message: string;
}

export interface TerminalResultMessage {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result: any;
	error?: TerminalError;
}
