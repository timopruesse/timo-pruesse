<script lang="ts">
	import type { Technology } from 'src/types/technologies';

	export let technology: Technology;
</script>

<div class="px-2 py-3 bg-white shadow rounded-lg overflow-hidden sm:p-4">
	<div class="mt-1 text-3xl font-semibold text-gray-900">
		<a href={technology.url} target="_blank" rel="noopener noreferrer">
			{technology.name}
		</a>
	</div>
</div>
