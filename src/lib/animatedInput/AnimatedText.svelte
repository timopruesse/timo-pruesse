<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { ActionPayload, DELETE_MODIFIER, InputAction } from './types';

	export let action: InputAction = 'none';
	export let duration: number;
	export let delay = 0;

	const dispatch = createEventDispatcher<{
		start: ActionPayload;
		cancel: ActionPayload;
		end: ActionPayload;
	}>();

	let animatedNode: HTMLDivElement;
	let showCursor = false;

	function isTypingAnimation({ animationName }: AnimationEvent) {
		return animationName.includes('typing');
	}

	const cursorWidth = 0.2;
	let isDeleted = false;

	$: inputWidth = text.length + cursorWidth;
	$: isDeleting = ['delete', 'clear'].includes(action);

	let width = inputWidth;

	function onStart(e: AnimationEvent) {
		if (!isTypingAnimation(e)) {
			return;
		}

		dispatch('start', { action });
		showCursor = true;
		width = isDeleting ? cursorWidth : inputWidth;
		isDeleted = false;
	}

	function onCancel(e: AnimationEvent) {
		if (action === 'none' || !isTypingAnimation(e)) {
			return;
		}

		dispatch('cancel', { action });
		showCursor = false;
		width = isDeleting ? cursorWidth : inputWidth;
		isDeleted = isDeleting;
	}

	function onEnd(e: AnimationEvent) {
		if (!isTypingAnimation(e)) {
			return;
		}

		dispatch('end', { action });
		showCursor = false;
		width = isDeleting ? cursorWidth : inputWidth;
		isDeleted = isDeleting;
	}

	let mutationObserver: MutationObserver;
	let text = '';

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

	let prevAction: InputAction;
	let typingDelay = 0;

	$: {
		typingDelay = ['none', 'clear'].includes(prevAction) ? 0 : delay;
		prevAction = action;
	}

	$: typingDuration = isDeleting ? duration * DELETE_MODIFIER : duration;
	$: animationName = isDeleting ? 'typing-reverse' : 'typing';
	$: animation = `animation: ${animationName} ${typingDuration}ms steps(${text.length}) ${typingDelay}ms`;
</script>

<div class="flex">
	<div
		bind:this={animatedNode}
		class:text-transparent={isDeleted}
		class="whitespace-nowrap overflow-hidden font-mono"
		style={`--input-width:${inputWidth}ch;width:${width}ch;${animation}`}
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
