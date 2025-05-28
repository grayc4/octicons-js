import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        nodeResolve(),
        typescript( {
            declaration: true,
            outDir: 'dist'
        } )
    ],
    external: []
};