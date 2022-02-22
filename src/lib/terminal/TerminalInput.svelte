<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import CurrentPath from './CurrentPath.svelte';
	import Line from './Line.svelte';
	import { runCommand } from '$lib/utils/terminal';
	import type { TerminalError } from '$lib/workers/types';

	export let instance: HTMLInputElement | undefined = undefined;
	export let value = '';

	async function executeCommand(command: string) {
		value = '';

		try {
			const output = await runCommand(command);
			commandStore.update((prev) => [...prev, { input: command, output }]);
		} catch (error) {
			const terminalError = error as TerminalError;

			commandStore.update((prev) => [...prev, { input: command, output: terminalError.message }]);
			console.error(terminalError);
		}
	}

	let isFocused = false;
	let caretPosition = 0; // TODO: Use caret position to show correct position after using arrow keys
</script>

<CurrentPath />
<Line class="relative">
	<input
		bind:this={instance}
		bind:value
		title="terminal input"
		class="flex-1 bg-transparent resize-none outline-none overflow-hidden caret-transparent"
		spellcheck="false"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		on:keypress={() => (caretPosition = instance?.selectionEnd ?? 0)}
		on:keydown={(e) => {
			if (e.key === 'ArrowUp') {
				const lastCommand = $commandStore[$commandStore.length - 1];
				if (lastCommand) {
					value = lastCommand.input;
				}
				return;
			}

			if (e.key !== 'Enter') {
				// TODO: Remove this when caretPosition is used
				if (e.key.includes('Arrow')) {
					e.preventDefault();
				}
				return;
			}

			e.preventDefault();
			executeCommand(value);
		}}
	/>
	{#if isFocused}
		<span
			class="absolute left-0"
			style={`transform:translate3d(calc(20px + ${value.length}ch),0,0)`}>‗</span
		>
	{/if}
</Line>
