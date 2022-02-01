export enum TerminalCommandType {
	Add = 'add'
}

export interface TerminalMessage {
	command: TerminalCommandType;
	args?: Array<string | number>;
}

export enum TerminalCommandErrorType {
	InvalidCommand = 'invalid_command',
	ExecutionError = 'execution_error'
}

interface TerminalError {
	type: TerminalCommandErrorType;
	message: string;
}

export interface TerminalResultMessage {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	result: any;
	error?: TerminalError;
}
