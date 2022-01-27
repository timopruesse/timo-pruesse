<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import { getCommandOutput } from './commands';
	import Line from './Line.svelte';

	export let instance: HTMLInputElement | undefined = undefined;
	export let value = '';

	function executeCommand(commandName: string) {
		value = '';

		commandStore.update((prev) => [
			...prev,
			{ input: commandName, output: getCommandOutput(commandName) }
		]);
	}

	let isFocused = false;
	let caretPosition = 0; // TODO: Use caret position to show correct position after using arrow keys
</script>

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
