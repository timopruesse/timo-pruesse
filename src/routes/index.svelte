<script context="module">
	import { browser, dev } from '$app/env';
	import { headerStore } from '$lib/header/store';
	import TechGrid from '$lib/technologies/TechGrid.svelte';

	export const hydrate = dev;
	export const router = browser;
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

<section class="bg-gray-300">
	<TechGrid />
</section>
