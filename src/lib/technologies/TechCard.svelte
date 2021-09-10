<script lang="ts">
	import type { Technology } from 'src/types/technologies';

	export let technology: Technology;
</script>

<a href={technology.url} target="_blank" rel="noopener noreferrer" class="hover:z-50 transition duration-400 ease-in-out hover:scale-105 hover:transform hover:-skew-y-1 px-2 pt-1 pb-2 bg-white text-gray-900 shadow rounded-lg overflow-hidden hover:bg-gray-700 hover:text-white cursor-pointer">
	<div class="mt-1 text-2xl font-medium">
		{technology.name}
	</div>
</a>
