<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import '../styles/generated/main.css';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1 flex">
		<slot />
	</main>

	<Footer />
</div>
