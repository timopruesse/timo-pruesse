import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import wasmPack from 'vite-plugin-wasm-pack';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: node({
			precompress: true
		}),
		vite: {
			plugins: [wasmPack([], ['timo_pruesse_wasm_terminal'])]
		}
	}
};

export default config;
