<script context="module">
	import { browser, dev } from '$app/env';
	import TechGrid from '$lib/technologies/TechGrid.svelte';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>Timo Prüße | Fullstack Dev</title>
</svelte:head>

<section class="bg-gray-300">
	<TechGrid />
</section>
