<script lang="ts">
	import { onMount } from 'svelte';
	import Line from './Line.svelte';
	import Output from './Output.svelte';

	let currentLine: HTMLInputElement;

	onMount(async () => {
		currentLine.focus();
	});
</script>

<div
	class={`text-iceblue bg-nightowl p-4 sm:p-8 font-mono text-base sm:text-xl ${
		$$props.class || ''
	}`.trim()}
>
	<Line>whoami</Line>
	<Output>timo</Output>
	<Line>
		<input
			bind:this={currentLine}
			title="terminal input"
			class="current-line flex-1 bg-transparent resize-none outline-none w-full overflow-hidden"
			spellcheck="false"
		/>
	</Line>
</div>
