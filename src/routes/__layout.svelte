<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../styles/tailwind-output.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
