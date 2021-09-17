<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Frequency } from './frequency';
	import { filterStore } from './store';

	export let frequency: Frequency;

	const dispatch = createEventDispatcher<{ click: never }>();
	const onClick = () => dispatch('click');

	function getColorClasses(frequency: Frequency): string {
		if (frequency === Frequency.Frequently) {
			return 'bg-indigo-600 text-white sm:hover:bg-indigo-900';
		}

		if (frequency === Frequency.LessFrequently) {
			return 'bg-yellow-400 text-yellow-900 sm:hover:bg-yellow-600';
		}

		return 'bg-green-700 text-white sm:hover:bg-green-900';
	}

	$: colors = getColorClasses(frequency);

	let filteredFrequency: Frequency | null = null;
	filterStore.subscribe((frequency) => {
		filteredFrequency = frequency;
	});
</script>

<button
	on:click={onClick}
	class={`${colors} ${
		filteredFrequency === frequency ? 'shadow-xl font-semibold scale-110' : 'shadow-lg'
	} sm:hover:text-white overflow-hidden w-full sm:w-auto px-2 py-1 sm:px-6 sm:py-2 sm:text-lg rounded-full sm:hover:z-50 transition duration-400 ease-in-out sm:hover:scale-110`}
>
	<slot />
</button>
