<script context="module">
	import { headerStore } from '$lib/header/store';

	/**
	 * @type {import('@sveltejs/kit').ErrorLoad}
	 */
	export function load({ error, status }) {
		headerStore.set({
			title: 'Whoops!',
			subtitle: 'Something went wrong :('
		});

		return {
			props: {
				status,
				message: error.message
			}
		};
	}
</script>

<script lang="ts">
	export let status: number;
	export let message: string;
</script>

<svelte:head>
	<title>Timo Prüße | {status}</title>
</svelte:head>

<div class="px-8 py-2 text-red-900 bg-red-50">
	<p class="mb-4">
		<a class="text-lg font-semibold hover:text-black" href="/"
			><span class="text-2xl">←</span> <span class="hover:underline">Home</span>
		</a>
	</p>
	<p class="text-2xl py-4"><span class="font-semibold">{status}</span> | {message}</p>
</div>
