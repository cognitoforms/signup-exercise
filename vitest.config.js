import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [
		Vue(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['**/*.{test,spec,unit}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
	},
})