/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file The lint-staged configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://github.com/okonet/lint-staged#configuration
 */

module.exports = {
  "*.{js,json,jsx,md}": "prettier --list-different",
  "*.{js,jsx}": "eslint --ext .js,.jsx",
  "*.md": "remark --no-stdout"
};
