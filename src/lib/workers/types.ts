export interface TerminalMessage {
	command: string;
}

export interface TerminalError {
	message: string;
}

export interface TerminalResultMessage {
	result: string;
	error?: TerminalError;
}
