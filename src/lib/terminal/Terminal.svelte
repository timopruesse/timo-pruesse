<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import { tick } from 'svelte';

	import CommandResults from './CommandResults.svelte';
	import TerminalInput from './TerminalInput.svelte';
	import TerminalIntro from './TerminalIntro.svelte';

	let terminal: HTMLDivElement;
	let currentLine: HTMLInputElement;

	let isInputVisible = false;

	async function scrollDown() {
		await tick();
		terminal?.scroll({ behavior: 'smooth', top: terminal.scrollHeight });
	}

	commandStore.subscribe(scrollDown);

	function handleIntroEnd() {
		isInputVisible = true;
		scrollDown();
	}

	$: if (currentLine) {
		currentLine.focus();
	}
</script>

<div
	bind:this={terminal}
	id="terminal"
	class={`text-iceblue bg-nightowl p-4 sm:p-8 font-mono text-sm sm:text-base md:text-xl md:max-h-[60vh] overflow-y-auto overflow-x-auto md:overflow-x-hidden ${
		$$props.class || ''
	}`.trim()}
	on:click={() => currentLine?.focus()}
>
	<TerminalIntro on:end={handleIntroEnd} />
	<CommandResults />

	{#if isInputVisible}
		<TerminalInput bind:instance={currentLine} />
	{/if}
</div>

<style lang="scss">
	#terminal {
		&::-webkit-scrollbar {
			@media (max-width: 640px) {
				width: 10px;
			}
			width: 4px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: rgba($color: #043254, $alpha: 0.67);

			@media (min-width: 641px) {
				border-radius: 0.75rem;
			}
		}

		&::-webkit-scrollbar-thumb:hover {
			background: rgba($color: #043254, $alpha: 1);
		}
	}
</style>
