<script lang="ts">
	import { commandStore } from '$lib/stores/commandStore';
	import Line from './Line.svelte';
	import Output from './Output.svelte';
</script>

{#each $commandStore as { input, output }}
	<Line>{input}</Line>
	<Output>{output}</Output>
{/each}
