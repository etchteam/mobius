#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('@rollup/plugin-typescript').default;
const postcss = require('rollup-plugin-postcss');
const commonjs = require('@rollup/plugin-commonjs');

// see below for details on the options
const inputOptions = {
  input: path.resolve(__dirname, '../src/index.tsx'),
  external: ['react'],
  plugins: [
    resolve(),
    typescript(),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    postcss({
      modules: true,
    }),
  ],
};

const outputOptions = [
  {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
