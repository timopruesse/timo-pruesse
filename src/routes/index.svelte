<script context="module">
	import { browser } from '$app/env';
	import Terminal from '$lib/terminal/Terminal.svelte';

	export const router = browser;
	export const hydrate = true;
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import TerminalWorker from '$lib/workers/terminal?worker';

	onMount(() => {
		try {
			const worker = new TerminalWorker();

			worker.postMessage({ number1: 10, number2: 15 });

			worker.onmessage = (event: MessageEvent) => {
				console.log('result', event.data);
			};
		} catch (e) {
			console.error(e);
		}
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
