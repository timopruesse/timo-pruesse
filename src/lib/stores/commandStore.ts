import type { TerminalCommand } from '$lib/terminal/types';
import { writable } from 'svelte/store';

export const commandStore = writable<TerminalCommand['output'][]>([]);
