<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';

	import AnimatedCommand from './AnimatedCommand.svelte';
	import { outputs } from './commands';
	import TerminalInput from './TerminalInput.svelte';
	import type { TerminalCommand } from './types';

	let currentLine: HTMLInputElement;

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

	let printedCommands = 0;

	$: if (currentLine) {
		currentLine.focus();
	}

	commandStore.subscribe((commands) => {
		// TODO: Push output to the terminal...
		console.log(commands);
	});
</script>

<div
	class={`text-iceblue bg-nightowl p-4 sm:p-8 font-mono text-base sm:text-xl ${
		$$props.class || ''
	}`.trim()}
	on:click={() => currentLine?.focus()}
>
	{#each lines as { input, output }, i}
		<AnimatedCommand
			{input}
			{output}
			animate={printedCommands >= i}
			on:done={() => printedCommands++}
		/>
	{/each}

	{#if printedCommands === lines.length}
		<TerminalInput bind:instance={currentLine} />
	{/if}
</div>
