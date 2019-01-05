/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file The ESLint configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
 */

module.exports = {
  extends: "arcticicestudio",
  plugins: ["prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  rules: {
    "prettier/prettier": "error",
    "react/display-name": "off"
  }
};
