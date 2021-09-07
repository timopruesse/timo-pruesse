<script lang="ts">
	import type { Technology } from 'src/types/technologies';

	import TechGroup from './TechGroup.svelte';

	const technologyGroups: Record<string, Technology[]> = {
		Basics: [
			{ name: 'HTML5', url: 'https://html.spec.whatwg.org/' },
			{
				name: 'CSS',
				url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics'
			}
		],
		Languages: [
			{
				name: 'JavaScript',
				url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
			},
			{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
			{ name: 'PHP', url: 'https://www.php.net/' },
			{ name: 'Dart', url: 'https://dart.dev/' },
			{
				name: 'C#',
				url: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
			}
		],
		Frameworks: [
			{ name: 'React', url: 'https://reactjs.org/' },
			{ name: 'Laravel', url: 'https://laravel.com/' },
			{ name: 'Svelte/SvelteKit', url: 'https://svelte.dev/' },
			{ name: 'Vue', url: 'https://vuejs.org/' },
			{ name: 'Flutter', url: 'https://flutter.dev/' }
		],
		Testing: [
			{ name: 'Jest', url: 'https://jestjs.io/' },
			{
				name: 'React Testing Library',
				url: 'https://testing-library.com/docs/react-testing-library/intro/'
			},
			{ name: 'PHPUnit', url: 'https://phpunit.de/' }
		],
		UI: [
			{ name: 'Storybook', url: 'https://storybook.js.org/' },
			{ name: 'Material UI', url: 'https://material-ui.com/' }
		],
		'Databases/Data stores': [
			{ name: 'MySQL', url: 'https://www.mysql.com/' },
			{ name: 'Redis', url: 'https://redis.io/' }
		]
	};
</script>

<div class="bg-gray-900 text-gray-100 p-4">
	<h2 class="text-2xl leading-6 font-medium">Technologies I use</h2>
</div>
<div class="px-4 py-6">
	{#each Object.entries(technologyGroups) as [groupName, technologies]}
		<TechGroup {groupName} {technologies} />
	{/each}
</div>
