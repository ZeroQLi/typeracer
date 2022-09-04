import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	build: { target: 'es2020' },
	optimizeDeps: { esbuildOptions: {target: 'es2020' }}
};

export default config;
