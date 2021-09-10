import { writable } from 'svelte/store';

export interface HeaderAttributes {
	title: string;
	icon?: string;
	subtitle?: string;
}

export const headerStore = writable<HeaderAttributes>({
	title: ''
});
