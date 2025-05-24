import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	optimizeDeps: {
		include: ['daisyui'],
	},
	plugins: [tailwindcss(), sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom', 
		include: ['tests/**/*.test.ts'],
	},
	
});
