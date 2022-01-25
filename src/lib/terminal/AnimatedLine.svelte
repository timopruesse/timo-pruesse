<script lang="ts">
	import AnimatedInput from '$lib/animatedInput/AnimatedInput.svelte';
	import Line from './Line.svelte';
	import type { InputSequenceItem } from '$lib/animatedInput/types';

	export let sequence: InputSequenceItem[];
</script>

<Line><AnimatedInput {sequence} on:start on:done /></Line>
