<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<a href={url} class="text-white hover:text-gray-200" target="_blank" rel="noopener noreferrer">
	<span class="sr-only">{name}</span>
	<svg class="h-8 sm:h-10 w-8 sm:w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<slot />
	</svg>
</a>
