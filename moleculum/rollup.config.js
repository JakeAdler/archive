import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import analyze from 'rollup-plugin-analyzer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/components/index.js',
  external: [
    'styled-components',
    'styled-system'
  ],
  plugins: [
    resolve(),
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**'
    }),
    external({
      includeDependencies: true,
    }),
    analyze()
  ],
  output: {
    file: './dist/bundle.js',
    format: 'es', 
    globals: { 'styled-components': 'styled' },
    sourcemap: true,
    sourcemapFile: './dist/bundle.js.map'
  }
};