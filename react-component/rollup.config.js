import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    external: ['react', 'react-dom'],
    input: './src/index.js',
    plugins: [
    resolve(),
    babel({
        exclude: 'node_modules/**' // only transpile our source code
    })
    ],
    output: {
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        file: 'dist/bundle.js',
        format: 'es', // export as es modules 
        sourceMap: true
    }
};