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
import Peaks from "./styled/Peaks";
import Shades from "./styled/Shades";
import { mountainsPropTypes } from "../shared/propTypes";

const Mountains = ({ fillDelay, fillDuration, outlineDuration, shadeFillDelay, shadeFillDuration, outlineStyles }) => (
  <Fragment>
    <Peaks fillDelay={fillDelay} fillDuration={fillDuration} />
    <Fill fillDelay={fillDelay} fillDuration={fillDuration} />
    <Shades fillDelay={shadeFillDelay} fillDuration={shadeFillDuration} />
    <Outlines outlineDuration={outlineDuration} outlineStyles={outlineStyles} />
  </Fragment>
);

Mountains.propTypes = mountainsPropTypes;

export default Mountains;
