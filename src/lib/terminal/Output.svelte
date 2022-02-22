<script lang="ts">
	import './output.scss';

	let value: string;
</script>

<span class="hidden" contenteditable bind:textContent={value}><slot /></span>
{#if value}
	<div class="terminal-output min-h-[28px]">{@html value}</div>
{/if}
