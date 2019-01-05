/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React, { Fragment } from "react";

import Outlines from "./styled/Outlines";
import Fill from "./styled/Fill";
import { auroraBorealisPropTypes } from "../shared/propTypes";

const AuroraBorealis = ({ auroraBorealisGleamGradientId, fillDelay, fillDuration, outlineDelay, outlineStyles }) => (
  <Fragment>
    <Fill
      auroraBorealisGleamGradientId={auroraBorealisGleamGradientId}
      fillDelay={fillDelay}
      fillDuration={fillDuration}
    />
    <Outlines outlineDelay={outlineDelay} outlineStyles={outlineStyles} />
  </Fragment>
);

AuroraBorealis.propTypes = auroraBorealisPropTypes;

export default AuroraBorealis;
