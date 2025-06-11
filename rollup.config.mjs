import { nodeResolve } from '@rollup/plugin-node-resolve';
import { copyFileSync } from 'fs';

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            generatedCode: {
                constBindings: true
            }
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'octicons',
            exports: 'named'
        }
    ],
    plugins: [
        nodeResolve(),
        {
            name: 'copy-types',
            writeBundle() {
                copyFileSync('index.d.ts', 'dist/index.d.ts');
            }
        }
    ],
    external: []
};