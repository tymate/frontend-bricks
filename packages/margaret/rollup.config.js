import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    dir: 'dist',
  },
  plugins: [
    peerDepsExternal(),
    babel(),
    commonjs(),
    resolve(),
    postcss({
      plugins: [],
    }),
  ],
};
