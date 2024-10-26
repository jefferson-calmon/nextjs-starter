import { Options } from 'tsup';

const config: Options = {
	entryPoints: ['index.ts'],
	format: ['cjs'],
	outDir: 'dist',
	clean: true,
	minify: true,
	sourcemap: false,
};

export default config;
