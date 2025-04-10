import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // Output directory for static files
			assets: 'build',
			fallback: null, // No SPA fallback needed for a portfolio
			precompress: false // Optional: compress files if you want
		}),
		paths: {
			base: '/my-portfolio' // Replace with your repo name (e.g., /username.github.io/my-portfolio)
		}
	}
};

export default config;