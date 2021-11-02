<script context="module">
	import { browser } from '$app/env';
	import Terminal from '$lib/terminal/Terminal.svelte';

	export const router = browser;
	export const hydrate = true;
	export const prerender = true;
</script>

<svelte:head>
	<title>Timo Prüße | I love teaching machines how to solve problems</title>
</svelte:head>

<section class="flex-1 flex justify-center items-center pt-16 sm:pt-32 pb-0 sm:pb-16 bg-gray-800">
	<Terminal class="h-full w-full sm:rounded-xl max-w-7xl sm:drop-shadow-xl" />
</section>
