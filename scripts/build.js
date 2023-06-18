import fs from 'fs';
import esbuild from 'esbuild';
import {transformSync} from '@babel/core';

async function build() {
	// Read tsconfig.json to determine the entry file
	const tsconfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf-8'));
	const entryFile = tsconfig.compilerOptions.rootDir + '/index.ts';

	// Transpile the code using Babel
	const transformedCode = transformSync(fs.readFileSync(entryFile, 'utf-8'), {
		presets: ['@babel/preset-env']
	}).code;

	// Write the transpiled code to a temporary file
	fs.writeFileSync('dist/tmp.js', transformedCode);

	// Build ESM version using esbuild
	await esbuild.build({
		entryPoints: ['dist/tmp.js'],
		outfile: 'dist/index.mjs',
		format: 'esm',
		bundle: true,
		minify: true
	});

	// Build CommonJS version using esbuild
	await esbuild.build({
		entryPoints: ['dist/tmp.js'],
		outfile: 'dist/index.js',
		format: 'cjs',
		bundle: true,
		minify: true
	});

	// Clean up the temporary file
	fs.unlinkSync('dist/tmp.js');
}

build().catch(err => {
	console.error(err);
	process.exit(1);
});
