import type { TerminalCommand } from '$lib/terminal/types';
import { writable } from 'svelte/store';

interface CommandStoreItem {
	input: string;
	output: TerminalCommand['output'];
}

export const commandStore = writable<CommandStoreItem[]>([]);
