/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file The Babel configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://babeljs.io
 * @since 0.1.0
 */

module.exports = {
  presets: [
    /**
     * Note that it is not required to specifiy `modules: false` as of Babel 7 - it knows automatically that Rollup
     * understands ES modules & that it shouldn't use any module transform with it.
     *
     * @see https://github.com/rollup/rollup-plugin-babel#modules
     */
    ["@babel/env", { loose: true }],
    "@babel/react"
  ],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    /**
     * Add support for server-side rendering, minification of styles, and a nicer debugging experience.
     *
     * @see https://www.styled-components.com/docs/tooling#babel-plugin
     */
    "babel-plugin-styled-components",
    [
      "babel-plugin-transform-react-remove-prop-types",
      {
        removeImport: true,
        /**
         * Ensure to keep `propTypes` working at runtime for the main public API component `ArcticLandscape`.
         *
         * @see https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#ignorefilenames
         */
        ignoreFilenames: ["node_modules", "ArcticLandscape.jsx"],
        /**
         * Ensure to also remove prop types imported from the shared module at `shared/propTypes.js`.
         *
         * @see https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#additionallibraries
         */
        additionalLibraries: [/\/shared\/propTypes$/]
      }
    ]
  ]
};
