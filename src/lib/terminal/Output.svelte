<script lang="ts">
	import './output.scss';

	let value: string;
</script>

<span class="hidden" contenteditable bind:textContent={value}><slot /></span>
{#if value}
	<div {...$$props} class={`terminal-output min-h-[28px] ${$$props.class || ''}`.trim()}>
		{@html value}
	</div>
{/if}
