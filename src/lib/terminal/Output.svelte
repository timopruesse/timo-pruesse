<script lang="ts">
	let value: string;
</script>

<span class="hidden" contenteditable bind:textContent={value}><slot /></span>
{#if value}
	<p class="min-h-[28px]">{@html value}</p>
{/if}
