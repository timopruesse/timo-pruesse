<script context="module">
	/**
	 * @type {import('@sveltejs/kit').ErrorLoad}
	 */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string;
</script>

<svelte:head>
	<title>Timo Prüße | Whoops</title>
</svelte:head>

<div class="p-8 text-red-900 bg-red-50">
	<p class="text-2xl">Whoops!</p>
	<p class="text-lg">Something went wrong :(</p>
	<p class="mt-4 font-semibold">{title}</p>
</div>
