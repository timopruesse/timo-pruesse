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
			input: [{ text: 'whoami', duration: 500, delay: 500 }],
			output: ['timo']
		},
		{
			input: [
				{ text: 'sudo rm /*', duration: 700, delay: 300 },
				{ text: 'cat ~/aboutme', duration: 200, delay: 400 }
			],
			output: ['Hi, my name is Timo 🙋‍♂️', 'I love teaching machines how to solve problems.', '']
		},
		{
			input: [{ text: 'timo --help', duration: 700, delay: 1000 }],
			output: [
				'',
				'Timo (v1.0.0)',
				'',
				'Usage:',
				'',
				'  timo --stack            print tech stack',
				'  timo --system           print system info',
				'  timo --version          print version',
				'',
				'  timo send:email         send an email',
				''
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

	{#if printedCommands === lines.length}
		<Line class="relative">
			<input
				bind:this={currentLine}
				title="terminal input"
				class="flex-1 bg-transparent resize-none outline-none overflow-hidden caret-transparent"
				spellcheck="false"
			/>
			<!-- TODO: Align cursor on the right side of the text... -->
			<span class="absolute left-6">‗</span>
		</Line>
	{/if}
</div>
