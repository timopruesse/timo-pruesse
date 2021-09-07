<script lang="ts">
	import type { Technology } from 'src/types/technologies';

	import TechCard from './TechCard.svelte';

	export let groupName: string;
	export let technologies: Technology[];
</script>

<h2 class="text-xl leading-6 font-bold text-gray-900">{groupName}</h2>
<div class="mt-4 mb-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
	{#each technologies as technology}
		<TechCard {technology} />
	{/each}
</div>
