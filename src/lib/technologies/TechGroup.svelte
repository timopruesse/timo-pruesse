<script lang="ts">
	import type { Technology } from './types';
	import type { Frequency } from './frequency';

	import { filterStore } from './store';
	import TechCard from './TechCard.svelte';

	export let groupName: string;
	export let technologies: Technology[] = [];

	$: sortedTechnologies = technologies
		.sort((a, b) => a.name.localeCompare(b.name))
		.sort((a, b) => a.frequency - b.frequency);

	let filteredFrequency: Frequency | null = null;
	filterStore.subscribe((frequency) => {
		filteredFrequency = frequency;
	});

	$: filteredTechnologies =
		filteredFrequency !== null
			? sortedTechnologies.filter((t) => t.frequency === filteredFrequency)
			: sortedTechnologies;
</script>

<h2 class="text-xl leading-6 font-bold text-gray-900">{groupName}</h2>
<div class="mt-4 mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
	{#if filteredTechnologies.length === 0}
		<div>- Empty -</div>
	{/if}

	{#each filteredTechnologies as technology}
		<TechCard {technology} />
	{/each}
</div>
