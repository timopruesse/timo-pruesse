<script lang="ts">
	import type { Technology } from './types';
	import { Frequency } from './frequency';

	export let technology: Technology;

	function getColorClasses(frequency: Frequency): string {
		if (frequency === Frequency.Frequently) {
			return 'bg-indigo-600 group-hover:bg-indigo-400';
		}

		if (frequency === Frequency.LessFrequently) {
			return 'bg-yellow-400 group-hover:bg-yellow-300';
		}

		return 'bg-green-700 group-hover:bg-green-500';
	}

	$: colors = getColorClasses(technology.frequency);
</script>

<a
	href={technology.url}
	target="_blank"
	rel="noopener noreferrer"
	class="group flex items-center px-2 py-2 shadow-lg hover:shadow-2xl hover:z-50 transition duration-400 ease-in-out hover:scale-105 hover:transform-gpu sm:hover:-skew-y-1 bg-white text-gray-900 rounded-lg overflow-hidden hover:bg-gray-700 hover:text-white cursor-pointer"
>
	<hr class={`${colors} border-0 w-2 h-full mr-2`} />
	<div class="text-xl sm:text-2xl font-medium">
		{technology.name}
	</div>
</a>
