<script context="module">
	import { browser, dev } from '$app/env';
	import { headerStore } from '$lib/header/store';
	import TechGrid from '$lib/technologies/TechGrid.svelte';

	export const router = browser;
	export const hydrate = true;
	export const prerender = true;

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		headerStore.set({
			title: 'Hi, my name is Timo',
			icon: '🙋‍♂️',
			subtitle: '« I love teaching machines how to solve problems. »'
		});

		return {};
	}
</script>

<svelte:head>
	<title>Timo Prüße | Fullstack Dev</title>
</svelte:head>

<section class="px-4 sm:px-10">
	<TechGrid />
</section>
