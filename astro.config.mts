import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://gwenananaelle.github.io/mayadelcampo/',
	base: '/mayadelcampo',
	vite: {
		plugins: [tailwindcss()],
	},
});
