import {defineManifest} from '@crxjs/vite-plugin';
import packageJson from './package.json';

const {version} = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
	// can only contain digits, dots, or dash
	.replaceAll(/[^\d.-]+/g, '')
	// split into version parts
	.split(/[.-]/);

export default defineManifest({
	manifest_version: 3,
	icons: {
		'16': 'src/assets/icon16.png',
		'32': 'src/assets/icon32.png',
		'48': 'src/assets/icon48.png',
		'128': 'src/assets/icon128.png',
	},
	description: 'powerful command-based searching',
	background: {
		service_worker: 'src/background.ts',
	},
	omnibox: {
		keyword: '!',
	},
	name: 'searchy',
	// up to four numbers separated by dots
	version: `${major}.${minor}.${patch}.${label}`,
	// semver is OK in "version_name"
	version_name: version,
});
