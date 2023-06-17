"use strict";
const fs = require('fs');
const { execSync } = require('child_process');
// Remove existing dist folder
if (fs.existsSync('./dist')) {
    execSync('rm -rf ./dist');
}
// Create dist folder
fs.mkdirSync('./dist');
// Build ESM version
execSync('tsc --module ESNext --outDir ./dist/esm');
// Build CommonJS version
execSync('tsc --module CommonJS --outDir ./dist/commonjs');
// Build UMD version
execSync('tsc --module UMD --outDir ./dist/umd');
// Copy package.json to dist folder
fs.copyFileSync('./package.json', './dist/package.json');
console.log('Build completed!');
