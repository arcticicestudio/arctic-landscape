/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file Provides shared prop types.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 */

import PropTypes from "prop-types";

const baseFill = {
  fillDelay: PropTypes.number,
  fillDuration: PropTypes.number
};

const baseOutlinePropTypes = {
  outlineDelay: PropTypes.number,
  outlineDuration: PropTypes.number,
  outlineStyles: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const auroraBorealisPropTypes = {
  ...baseFill,
  ...baseOutlinePropTypes,
  auroraBorealisGleamGradientId: PropTypes.string
};

const cloudsPropTypes = {
  ...baseFill,
  ...baseOutlinePropTypes
};

const mountainsPropTypes = {
  ...baseFill,
  ...baseOutlinePropTypes,
  shadeFillDelay: PropTypes.number,
  shadeFillDuration: PropTypes.number
};

export { baseOutlinePropTypes, auroraBorealisPropTypes, cloudsPropTypes, mountainsPropTypes };
