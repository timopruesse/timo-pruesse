<script lang="ts">
	import FrequencyCard from './FrequencyCard.svelte';
	import TechGroup from './TechGroup.svelte';
	import { technologyGroups } from './technologyGroups';
	import { filterStore } from './store';
	import { Frequency } from './frequency';

	function onFilter(frequency: Frequency) {
		filterStore.update((current) => (frequency !== current ? frequency : null));
	}
</script>

<h2 class="text-2xl sm:text-3xl leading-6 font-semibold py-4 text-center sm:text-left">
	Technologies I use
</h2>
<div
	class="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0 px-4 sm:px-0"
>
	<FrequencyCard frequency={Frequency.Everyday} on:click={() => onFilter(Frequency.Everyday)}
		>Everyday</FrequencyCard
	>
	<FrequencyCard frequency={Frequency.Frequently} on:click={() => onFilter(Frequency.Frequently)}
		>Frequently</FrequencyCard
	>
	<FrequencyCard
		frequency={Frequency.LessFrequently}
		on:click={() => onFilter(Frequency.LessFrequently)}>Less frequently</FrequencyCard
	>
</div>
<div class="py-6">
	{#each Object.entries(technologyGroups) as [groupName, technologies]}
		<TechGroup {groupName} {technologies} />
	{/each}
</div>
