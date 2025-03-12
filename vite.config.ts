import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import packageJson from './package.json' with { type: 'json' }

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: 'manifest.json',
					dest: '.',
					transform: (contents) => {
						const parsed = JSON.parse(contents)
						parsed.$schema = undefined
						parsed.version = packageJson.version
						return JSON.stringify(parsed, null, 2)
					},
				},
				{
					src: 'LICENSE',
					dest: '.',
				},
			],
		}),
	],
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				popup: path.resolve(__dirname, 'popup.html'),
				options: path.resolve(__dirname, 'options.html'),
				welcome: path.resolve(__dirname, 'welcome.html'),
				background: path.resolve(__dirname, 'src/background.ts'),
				content: path.resolve(__dirname, 'src/content.ts'),
			},
			output: {
				entryFileNames: 'scripts/[name].js',
				assetFileNames: 'assets/[name]-[hash].[ext]',
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
