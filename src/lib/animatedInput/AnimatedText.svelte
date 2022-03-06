<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { type ActionPayload, DELETE_MODIFIER, type InputAction } from './types';

	export let action: InputAction = 'none';
	export let duration: number;
	export let delay = 0;

	const dispatch = createEventDispatcher<{
		start: ActionPayload;
		cancel: ActionPayload;
		end: ActionPayload;
	}>();

	let animatedNode: HTMLDivElement;
	let showCursor = true;

	function isTypingAnimation({ animationName }: AnimationEvent) {
		return animationName.includes('typing');
	}

	let isDeleted = false;

	$: isDeleting = ['delete', 'clear'].includes(action);

	let text = '';
	let width = 0;

	function getWidth() {
		return isDeleting ? 0 : text.length;
	}

	function onStart(e: AnimationEvent) {
		if (!isTypingAnimation(e)) {
			return;
		}

		dispatch('start', { action });
		showCursor = true;
		width = getWidth();
		isDeleted = false;
	}

	function onCancel(e: AnimationEvent) {
		if (action === 'none' || !isTypingAnimation(e)) {
			return;
		}

		dispatch('cancel', { action });
		showCursor = false;
		width = getWidth();
		isDeleted = isDeleting;
	}

	function onEnd(e: AnimationEvent) {
		if (!isTypingAnimation(e)) {
			return;
		}

		dispatch('end', { action });
		showCursor = false;
		width = getWidth();
		isDeleted = isDeleting;
	}

	let mutationObserver: MutationObserver;

	onMount(() => {
		animatedNode.addEventListener('animationstart', onStart);
		animatedNode.addEventListener('animationcancel', onCancel);
		animatedNode.addEventListener('animationend', onEnd);

		text = animatedNode.innerText;
		mutationObserver = new MutationObserver((mutations) => {
			for (let mutation of mutations) {
				if (mutation.target.nodeName !== '#text') {
					continue;
				}
				text = mutation.target.nodeValue || '';
			}
		});
		mutationObserver.observe(animatedNode, { subtree: true, characterData: true });
	});

	onDestroy(() => {
		mutationObserver?.disconnect();

		animatedNode?.removeEventListener('animationstart', onStart);
		animatedNode?.removeEventListener('animationcancel', onCancel);
		animatedNode?.removeEventListener('animationend', onEnd);
	});

	$: typingDuration = isDeleting ? duration * DELETE_MODIFIER : duration;
	$: animationName = isDeleting ? 'typing-reverse' : 'typing';
	$: animation = `animation: ${animationName} ${typingDuration}ms steps(${text.length}) ${delay}ms`;
</script>

<div class="flex">
	<div
		bind:this={animatedNode}
		class:text-transparent={isDeleted}
		class="whitespace-nowrap overflow-hidden font-mono"
		style={`--input-width:${text.length}ch;width:${width}ch;${animation}`}
	>
		<slot />
	</div>
	{#if showCursor}
		<span class="font-bold">‗</span>
	{/if}
</div>

<style>
	@keyframes -global-typing {
		from {
			width: 0;
		}
	}

	@keyframes -global-typing-reverse {
		from {
			width: var(--input-width);
		}
	}
</style>
