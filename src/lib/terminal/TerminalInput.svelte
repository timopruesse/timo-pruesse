<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import CurrentPath from './CurrentPath.svelte';
	import Line from './Line.svelte';
	import { runCommand } from '$lib/utils/terminal';
	import type { TerminalError } from '$lib/workers/types';

	export let instance: HTMLInputElement | undefined = undefined;
	export let value = '';

	let caretPosition = 0;

	async function executeCommand(command: string) {
		value = '';
		caretPosition = 0;

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

	function setCaretPosition() {
		caretPosition = instance?.selectionEnd ?? 0;
	}
</script>

<CurrentPath />
<Line class="relative">
	<input
		bind:this={instance}
		bind:value
		title="terminal input"
		class="flex-1 bg-transparent resize-none outline-none overflow-hidden caret-transparent"
		spellcheck="false"
		autocorrect="off"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		on:keyup={setCaretPosition}
		on:keydown={(e) => {
			setCaretPosition();

			if (e.key !== 'Enter') {
				return;
			}

			e.preventDefault();
			executeCommand(value);
		}}
	/>
	{#if isFocused}
		<span
			class="absolute left-0"
			style={`transform:translate3d(calc(20px + ${
				value.length - (value.length - caretPosition)
			}ch),0,0)`}>‗</span
		>
	{/if}
</Line>
