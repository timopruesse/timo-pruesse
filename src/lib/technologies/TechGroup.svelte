<script lang="ts">
	import type { Technology } from 'src/types/technologies';

	import TechCard from './TechCard.svelte';

	export let groupName: string;
	export let technologies: Technology[];
</script>

<div class="mb-4">
	<h2 class="text-lg leading-6 font-medium text-gray-900">{groupName}</h2>
	<div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
		{#each technologies as technology}
			<TechCard {technology} />
		{/each}
	</div>
</div>
