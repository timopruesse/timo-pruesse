<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import AnimatedText from './AnimatedText.svelte';
	import type {
		InputAction,
		EndPayload,
		ReversePayload,
		ActionPayload,
		StartPayload,
		InputSequenceItem
	} from './types';

	let inputAction: InputAction = 'type';

	const dispatch = createEventDispatcher<{
		start: StartPayload;
		end: EndPayload;
		delete: ReversePayload;
		clear: never;
		done: never;
		iteration: never;
	}>();

	export let sequence: InputSequenceItem[];
	export let loop = false;

	let inputTimeout: NodeJS.Timeout;
	let currentIndex = 0;

	function getNextString() {
		const next = sequence[currentIndex + 1];
		if (next) {
			return next;
		}
		dispatch('iteration');

		return loop ? sequence[0] : null;
	}

	function clear() {
		dispatch('clear');
		currentIndex = 0;
	}

	function typeEnd() {
		dispatch('end', { index: currentIndex });

		const next = getNextString();
		if (!next) {
			dispatch('done');
			return;
		}

		const { delay = 0 } = next;
		inputTimeout = setTimeout(() => {
			requestAnimationFrame(() => {
				inputAction = 'delete';
				dispatch('delete', { index: currentIndex });
			});
		}, delay);
	}

	function moveStringPointer() {
		currentIndex++;
		if (currentIndex < sequence.length) {
			return;
		}
		currentIndex = 0;
	}

	function onStartCurrent({ detail: { action } }: CustomEvent<ActionPayload>) {
		dispatch('start', { index: currentIndex, action });
	}

	function onCancelCurrent() {
		clearTimeout(inputTimeout);
		clear();
	}

	function onEndCurrent({ detail: { action } }: CustomEvent<ActionPayload>) {
		if (action === 'clear') {
			clear();
			return;
		}

		if (action === 'type') {
			typeEnd();
			return;
		}

		moveStringPointer();
		inputAction = 'type';
	}

	onDestroy(() => {
		clearTimeout(inputTimeout);
	});

	$: currentSearchString = sequence[currentIndex];
</script>

<div class="flex-1">
	{#if currentSearchString}
		<AnimatedText
			action={inputAction}
			duration={currentSearchString.duration}
			delay={currentSearchString.delay}
			on:start={onStartCurrent}
			on:end={onEndCurrent}
			on:cancel={onCancelCurrent}
		>
			{currentSearchString.text}
		</AnimatedText>
	{/if}
</div>
