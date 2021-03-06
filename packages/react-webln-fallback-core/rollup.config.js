import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import localResolve from 'rollup-plugin-local-resolve';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.main,
    format: 'cjs',
    name: 'React WebLN Fallback',
  }, {
    file: pkg.module,
    format: 'es',
  }],
  plugins: [
    typescript(),
    json(),
    peerDepsExternal(),
    localResolve(),
    nodeResolve(),
    commonjs(),
  ]
}