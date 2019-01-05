/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React from "react";

import Outlines from "./styled/Outlines";
import { baseOutlinePropTypes } from "../shared/propTypes";

const Wind = ({ outlineDelay, outlineDuration, outlineStyles }) => (
  <Outlines outlineDelay={outlineDelay} outlineDuration={outlineDuration} outlineStyles={outlineStyles} />
);

Wind.propTypes = baseOutlinePropTypes;

export default Wind;
