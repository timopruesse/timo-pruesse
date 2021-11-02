<script lang="ts">
	import { onMount } from 'svelte';

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
	<p>$ print 'hello world'</p>
	<div class="flex">
		<p class="pr-2">$</p>
		<input
			bind:this={currentLine}
			title="terminal input"
			class="current-line bg-transparent resize-none outline-none w-full overflow-hidden"
			spellcheck="false"
		/>
	</div>
</div>
