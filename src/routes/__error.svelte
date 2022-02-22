<script context="module">
	/**
	 * @type {import('@sveltejs/kit').ErrorLoad}
	 */
	export function load({ error, status }) {
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

<div class="px-8 pb-4 pt-32 text-red-900 bg-red-50">
	<p class="text-2xl py-4"><span class="font-semibold">{status}</span> | {message}</p>
</div>
