<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import AnimatedCommand from './AnimatedCommand.svelte';
	import { outputs } from './commands';
	import type { TerminalCommand } from './types';

	const lines: TerminalCommand[] = [
		{
			input: [{ text: 'whoami', duration: 500, delay: 500 }],
			output: outputs.whoami
		},
		{
			input: [
				{ text: 'sudo rm /*', duration: 700, delay: 300 },
				{ text: 'cat ~/aboutme', duration: 200, delay: 400 }
			],
			output: outputs.aboutme
		},
		{
			input: [{ text: 'timo --help', duration: 700, delay: 1000 }],
			output: outputs.help
		}
	];

	const dispatch = createEventDispatcher<{ end: never }>();
	let printedCommands = 0;
</script>

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
