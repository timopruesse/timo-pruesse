<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<a href={url} class="text-gray-300 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
	<span class="sr-only">{name}</span>
	<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<slot />
	</svg>
</a>
