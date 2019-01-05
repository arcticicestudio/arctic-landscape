/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file The Rollup configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://rollupjs.org
 */

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import sourceMaps from "rollup-plugin-sourcemaps";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

/**
 * The name for the "CommonJS" format.
 *
 * @since 0.1.0
 * @see http://www.commonjs.org
 */
const FORMAT_CJS = "cjs";

/**
 * The name for the "ESModules" format.
 *
 * @since 0.1.0
 * @see https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive
 * @see https://github.com/nodejs/modules
 */
const FORMAT_ESM = "esm";

/**
 * The name for the "Universal Module Definition" format.
 *
 * @since 0.1.0
 * @see https://github.com/umdjs/umd
 */
const FORMAT_UMD = "umd";

/**
 * The name of the development environment mode.
 *
 * @since 0.1.0
 */
const MODE_DEV = "development";

/**
 * The name of the production environment mode.
 *
 * @since 0.1.0
 */
const MODE_PROD = "production";

/**
 * The configuration for Babel.
 *
 * @method babelConfig
 * @param {string} format The target format.
 * @return {Object} The babel configuration.
 * @since 0.1.0
 */
const babelConfig = format => ({
  /**
   * Must be enabled when Babel's `transform-runtime` plugin is used.
   *
   * @see https://github.com/rollup/rollup-plugin-babel#helpers
   * @see https://babeljs.io/docs/en/babel-plugin-transform-runtime
   */
  runtimeHelpers: true,
  plugins: [
    /**
     * Enable the re-use of Babel's injected helper code to save on codesize.
     *
     * @see https://babeljs.io/docs/en/babel-plugin-transform-runtime
     */
    [
      "@babel/transform-runtime",
      {
        /**
         * Allow smaller builds in module systems like Webpack, since it doesn't need to preserve CommonJS semantics.
         *
         * @see https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
         */
        useESModules: format === FORMAT_ESM
      }
    ],
    /**
     * Reduce or eliminate development checks from production code for `invariant` and `warning` calls to reduce bundle
     * size.
     *
     * @see https://github.com/4Catalyzer/babel-plugin-dev-expression
     */
    "dev-expression"
  ],
  exclude: ["node_modules/**"]
});

/**
 * The base build plugin configuration.
 *
 * @method basePlugins
 * @param {string} format The target format.
 * @param {string} mode The target environment mode.
 * @return {Object} The base plugin configuration.
 * @since 0.1.0
 */
const basePlugins = (format, mode) => [
  replace({
    "process.env.NODE_ENV": JSON.stringify(mode)
  }),
  nodeResolve({
    extensions: [".js", ".jsx"]
  }),
  babel(babelConfig(format)),
  commonjs(),
  sourceMaps()
];

/**
 * The globals for the "Universal Module Definition" format.
 * See the `output.dir` option for details.
 *
 * @type {Object}
 * @since 0.1.0
 * @see https://rollupjs.org/guide/en#big-list-of-options
 */
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "styled-components": "styled",
  "react-pose": "posed",
  "prop-types": "PropTypes"
};

/**
 * The base build configuration.
 *
 * @method baseConfig
 * @param {string} format The target format.
 * @param {string} mode The target environment mode.
 * @return {Object} The base build configuration.
 */
const baseConfig = (format, mode) => {
  const config = {
    input: "./src/index.js",
    output: {
      file: `./dist/${pkg.name}.${format}.${mode === MODE_DEV ? `${MODE_DEV}.js` : "js"}`,
      format
    },
    /* `\0` is a Rollup convention for generated in memory modules. */
    external: id => !id.startsWith("\0") && !id.startsWith(".") && !id.startsWith("/"),
    plugins: basePlugins(format, mode)
  };
  if (mode === MODE_DEV) config.output.sourcemap = true;

  return config;
};

/**
 * The name for the "CommonJS" format.
 *
 * @method buildCjs
 * @param {string} mode The target environment mode.
 * @return {Object} The build configuration.
 * @since 0.1.0
 * @see http://www.commonjs.org
 */
const buildCjs = ({ mode }) => {
  const config = baseConfig(FORMAT_CJS, mode);
  config.output.exports = "named";
  config.plugins.push(sizeSnapshot());

  return config;
};

/**
 * Generates the build configuration for the "ESModules" format.
 *
 * @method buildEsm
 * @param {string} mode The target environment mode.
 * @return {Object} The build configuration.
 * @since 0.1.0
 * @see https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive
 * @see https://github.com/nodejs/modules
 */
const buildEsm = ({ mode }) => {
  const config = baseConfig(FORMAT_ESM, mode);
  if (mode === MODE_PROD) config.plugins.push(terser());

  return config;
};

/**
 * The name for the "Universal Module Definition" format.
 *
 * @method buildUmd
 * @param {string} mode The target environment mode.
 * @return {Object} The build configuration.
 * @since 0.1.0
 * @see https://github.com/umdjs/umd
 */
const buildUmd = ({ mode }) => {
  const config = baseConfig(FORMAT_UMD, mode);
  config.output.name = "ArcticLandscape";
  config.output.exports = "named";
  config.output.globals = globals;
  config.output.external = Object.keys(globals);
  config.plugins.push(sizeSnapshot());

  return config;
};

export default [
  buildUmd({ mode: MODE_DEV }),
  buildUmd({ mode: MODE_PROD }),
  buildCjs({ mode: MODE_DEV }),
  buildCjs({ mode: MODE_PROD }),
  buildEsm({ mode: MODE_DEV }),
  buildEsm({ mode: MODE_PROD })
];
