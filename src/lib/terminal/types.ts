import type { InputSequenceItem } from '$lib/animatedInput/types';

export interface TerminalCommand {
	input: InputSequenceItem[];
	output: string;
}
