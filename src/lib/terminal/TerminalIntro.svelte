<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	import AnimatedCommand from './AnimatedCommand.svelte';
	import type { TerminalCommand } from './types';
	import { runCommand } from '$lib/utils/terminal';
	import Output from './Output.svelte';

	let lines: TerminalCommand[] = [];

	onMount(async () => {
		lines = [
			{
				input: [{ text: 'whoami', duration: 500, delay: 500 }],
				output: await runCommand('whoami')
			},
			{
				input: [
					{ text: 'sudo rm /*', duration: 700, delay: 300 },
					{ text: 'cat ~/aboutme', duration: 200, delay: 400 }
				],
				output: await runCommand('cat ~/aboutme')
			},
			{
				input: [{ text: 'timo --help', duration: 700, delay: 800 }],
				output: await runCommand('timo --help')
			}
		];
	});

	const dispatch = createEventDispatcher<{ end: never }>();
	let printedCommands = 0;
</script>

<Output class="mb-1 md:mb-2 text-xs md:text-sm italic text-toxicgreen/75">
	timo_wasm - powered by web workers and web assembly
</Output>

{#each lines as { input, output }, i}
	<AnimatedCommand
		{input}
		{output}
		animate={printedCommands >= i}
		on:done={() => {
			if (++printedCommands === lines.length) {
				dispatch('end');
			}
		}}
	/>
{/each}
