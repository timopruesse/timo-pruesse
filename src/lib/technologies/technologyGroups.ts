import { Frequency } from './frequency';
import type { Technology } from './types';

export const technologyGroups: Record<string, Technology[]> = {
	Languages: [
		{
			name: 'JavaScript',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			frequency: Frequency.Everyday
		},
		{ name: 'TypeScript', url: 'https://www.typescriptlang.org/', frequency: Frequency.Everyday },
		{ name: 'PHP', url: 'https://www.php.net/', frequency: Frequency.Everyday },
		{ name: 'Dart', url: 'https://dart.dev/', frequency: Frequency.Frequently },
		{
			name: 'C#',
			url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
			frequency: Frequency.LessFrequently
		},
		{
			name: 'Golang',
			url: 'https://golang.org/',
			frequency: Frequency.LessFrequently
		},
		{
			name: 'Python',
			url: 'https://www.python.org/',
			frequency: Frequency.LessFrequently
		}
	],
	Frameworks: [
		{ name: 'React', url: 'https://reactjs.org/', frequency: Frequency.Everyday },
		{ name: 'Laravel', url: 'https://laravel.com/', frequency: Frequency.Everyday },
		{ name: 'Svelte', url: 'https://svelte.dev/', frequency: Frequency.Everyday },
		{ name: 'SvelteKit', url: 'https://kit.svelte.dev/', frequency: Frequency.Everyday },
		{ name: 'Vue', url: 'https://vuejs.org/', frequency: Frequency.Frequently },
		{ name: 'Next.js', url: 'https://nextjs.org/', frequency: Frequency.Frequently },
		{ name: 'NuxtJS', url: 'https://nuxtjs.org/', frequency: Frequency.LessFrequently },
		{ name: 'Flutter', url: 'https://flutter.dev/', frequency: Frequency.Frequently }
	],
	Testing: [
		{ name: 'Jest', url: 'https://jestjs.io/', frequency: Frequency.Everyday },
		{
			name: 'React Testing Library',
			url: 'https://testing-library.com/docs/react-testing-library/intro/',
			frequency: Frequency.Everyday
		},
		{ name: 'PHPUnit', url: 'https://phpunit.de/', frequency: Frequency.Everyday },
		{ name: 'Playwright', url: 'https://playwright.dev/', frequency: Frequency.LessFrequently }
	],
	UI: [
		{ name: 'Tailwind CSS', url: 'https://tailwindcss.com/', frequency: Frequency.Everyday },
		{ name: 'Material UI', url: 'https://material-ui.com/', frequency: Frequency.Frequently },
		{ name: 'Storybook', url: 'https://storybook.js.org/', frequency: Frequency.Everyday }
	],
	'Databases/Data stores': [
		{ name: 'MySQL', url: 'https://www.mysql.com/', frequency: Frequency.Everyday },
		{ name: 'Redis', url: 'https://redis.io/', frequency: Frequency.Frequently },
		{ name: 'MongoDB', url: 'https://www.mongodb.com/', frequency: Frequency.LessFrequently },
		{ name: 'SQLite', url: 'https://www.sqlite.org/', frequency: Frequency.Frequently }
	],
	Cloud: [
		{ name: 'DigitalOcean', url: 'https://www.digitalocean.com/', frequency: Frequency.Everyday },
		{ name: 'Amazon S3', url: 'https://aws.amazon.com/s3/', frequency: Frequency.Frequently },
		{ name: 'Firebase', url: 'https://firebase.google.com/', frequency: Frequency.LessFrequently }
	],
	'Machine learning/Data science': [
		{ name: 'Tensorflow', url: 'https://www.tensorflow.org/', frequency: Frequency.LessFrequently }
	]
};
