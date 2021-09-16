import { writable } from 'svelte/store';
import type { Frequency } from './frequency';

export const filterStore = writable<Frequency | null>(null);
