<script lang="ts">
	import type { InputSequenceItem } from '$lib/animatedInput/types';
	import { createEventDispatcher } from 'svelte';

	import AnimatedLine from './AnimatedLine.svelte';
	import Output from './Output.svelte';

	export let input: InputSequenceItem[];
	export let output: string[];
	export let animate = false;

	let printOutput = false;

	const dispatch = createEventDispatcher<{ done: never }>();
</script>

{#if animate}
	<AnimatedLine
		sequence={input}
		on:start
		on:done={() => {
			printOutput = true;
			dispatch('done');
		}}
	/>
	{#if printOutput}
		{#each output as line}
			<Output>{line}</Output>
		{/each}
	{/if}
{/if}
