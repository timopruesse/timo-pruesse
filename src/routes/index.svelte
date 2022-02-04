<script context="module">
	import { browser } from '$app/env';
	import Terminal from '$lib/terminal/Terminal.svelte';

	export const router = browser;
	export const hydrate = true;
	export const prerender = true;
</script>

<script lang="ts">
	import init, { add } from 'timo_pruesse_wasm_terminal';

	init().then(() => {
		console.log(add(5, 7));
	});
</script>

<svelte:head>
	<title>Timo Prüße | I love teaching machines how to solve problems</title>
</svelte:head>

<section class="flex-1 flex justify-center items-center pt-16 md:pt-32 pb-0 md:pb-16 bg-gray-800">
	<Terminal
		class="h-full w-full md:rounded-xl max-w-[100vw] md:max-w-7xl md:drop-shadow-xl md:mx-8"
	/>
</section>
