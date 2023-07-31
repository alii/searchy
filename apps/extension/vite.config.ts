import {crx} from '@crxjs/vite-plugin';
import {defineConfig, type PluginOption} from 'vite';
import manifest from './manifest.config';

const createBuildConfig = (outDir: string) => ({
	outDir,
	emptyOutDir: true,
});

export default defineConfig(({mode, command}) => {
	console.log(`mode: ${mode}, command: ${command}`);

	const plugins = [, crx({manifest}) as PluginOption];

	const server = {
		port: 5_174,
		strictPort: true,
		hmr: {
			port: 5_174,
		},
	};

	const cases = {
		production: 'release',
		development: 'dist',
		default: 'dist',
	};
	const build = createBuildConfig(cases[mode] || cases.default);

	return {plugins, server, build};
});
