import { writable } from 'svelte/store';

interface CommandStoreItem {
	input: string;
	output: string;
}

export const commandStore = writable<CommandStoreItem[]>([]);
