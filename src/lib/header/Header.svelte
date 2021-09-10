<script lang="ts">
	import { headerStore, HeaderAttributes } from '$lib/header/store';

	let attributes: HeaderAttributes;

	headerStore.subscribe((value) => {
		attributes = value;
	});
</script>

<!-- TODO: Add transition for height change (different if there's no subtitle) -->

<header>
	<div class="relative bg-black">
		<div class="absolute inset-0">
			<picture>
				<source srcset="header_bg.webp" type="image/webp" />
				<img
					class="w-full h-full object-cover"
					src="header_bg.jpg"
					alt="A sunset at the Außenalster."
				/>
			</picture>
			<div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
		</div>
		<div class="relative max-w-7xl mx-auto py-8 px-4 sm:py-32 sm:px-6 lg:px-8">
			<h1
				class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl flex flex-col-reverse items-center sm:block"
			>
				<span>{attributes.title}</span>{#if attributes.icon}<span class="mb-4 sm:ml-6 text-7xl"
						>{attributes.icon}</span
					>{/if}
			</h1>
			{#if attributes.subtitle}
				<p class="mt-6 text-2xl text-white text-center sm:text-left">
					{attributes.subtitle}
				</p>
			{/if}
		</div>
	</div>
</header>
