/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React, { Fragment } from "react";

import Fill from "./styled/Fill";
import Outlines from "./styled/Outlines";
import { cloudsPropTypes } from "../shared/propTypes";

const Clouds = ({ fillDelay, fillDuration, outlineDelay, outlineStyles }) => (
  <Fragment>
    <Fill fillDelay={fillDelay} fillDuration={fillDuration} />
    <Outlines outlineDelay={outlineDelay} outlineStyles={outlineStyles} />
  </Fragment>
);

Clouds.propTypes = cloudsPropTypes;

export default Clouds;
