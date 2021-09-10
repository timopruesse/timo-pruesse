<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import '../styles/generated/main.css';
</script>

<Header />

<main class="bg-gray-200 text-gray-900">
	<slot />
</main>

<Footer />
