<script lang="ts">
	import type { InputSequenceItem } from '$lib/animatedInput/types';
	import AnimatedCommand from './AnimatedCommand.svelte';

	import Line from './Line.svelte';

	let currentLine: HTMLInputElement;

	// TODO: Focus after last animation ended :)
	// currentLine.focus();

	interface TerminalCommand {
		input: InputSequenceItem[];
		output: string[];
	}

	const lines: TerminalCommand[] = [
		{
			input: [{ text: 'whoami', duration: 500 }],
			output: ['timo']
		},
		{
			input: [{ text: 'cat ~/aboutme', duration: 200, delay: 5000 }],
			output: ['Hi, my name is Timo 🙋‍♂️', 'I love teaching machines how to solve problems.']
		},
		{
			input: [{ text: 'timo --help', duration: 700 }],
			output: [
				'',
				'Timo (v1.0.0)',
				'',
				'Usage:',
				'',
				// TODO: Make it possible to render 'table'
				'timo --stack     |   print tech stack',
				'timo --version   |   print version'
			]
		}
	];

	let printedCommands = 0;
</script>

<div
	class={`text-iceblue bg-nightowl p-4 sm:p-8 font-mono text-base sm:text-xl ${
		$$props.class || ''
	}`.trim()}
>
	{#each lines as { input, output }, i}
		<AnimatedCommand
			{input}
			{output}
			animate={printedCommands >= i}
			on:done={() => printedCommands++}
		/>
	{/each}

	{#if printedCommands === 2}
		<Line>
			<input
				bind:this={currentLine}
				title="terminal input"
				class="current-line flex-1 bg-transparent resize-none outline-none w-full overflow-hidden"
				spellcheck="false"
			/>
		</Line>
	{/if}
</div>
