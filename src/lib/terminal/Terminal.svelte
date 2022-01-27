<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import { tick } from 'svelte';

	import CommandResults from './CommandResults.svelte';
	import TerminalInput from './TerminalInput.svelte';
	import TerminalIntro from './TerminalIntro.svelte';

	let terminal: HTMLDivElement;
	let currentLine: HTMLInputElement;

	let isInputVisible = false;

	$: if (currentLine) {
		currentLine.focus();
	}

	// TODO: Style scrollbar...

	commandStore.subscribe(async () => {
		await tick();
		terminal?.scroll({ behavior: 'smooth', top: terminal.scrollHeight });
	});
</script>

<div
	bind:this={terminal}
	class={`text-iceblue bg-nightowl p-4 sm:p-8 font-mono text-base sm:text-xl max-h-[50vh] overflow-y-auto ${
		$$props.class || ''
	}`.trim()}
	on:click={() => currentLine?.focus()}
>
	<TerminalIntro on:end={() => (isInputVisible = true)} />
	<CommandResults />

	{#if isInputVisible}
		<TerminalInput bind:instance={currentLine} />
	{/if}
</div>
