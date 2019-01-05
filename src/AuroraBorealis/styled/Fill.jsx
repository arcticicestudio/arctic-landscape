/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React, { Fragment } from "react";
import posed from "react-pose";
import styled from "styled-components";

import { fillPath } from "../pathData";
import GleamGradient from "./GleamGradient";
import { baseFillPoseConfig } from "../../shared/poseConfig";
import { AURORA_BOREALIS_GLEAM_GRADIENT_ID } from "../../shared/constants";

const Fill = styled(posed.path(baseFillPoseConfig))`
  fill: url(#${({ auroraBorealisGleamGradientId }) => auroraBorealisGleamGradientId});
`;

/* eslint-disable-next-line react/prop-types */
export default React.memo(({ auroraBorealisGleamGradientId, ...passProps }) => (
  <Fragment>
    {auroraBorealisGleamGradientId === AURORA_BOREALIS_GLEAM_GRADIENT_ID && <GleamGradient />}
    <Fill auroraBorealisGleamGradientId={auroraBorealisGleamGradientId} d={fillPath} {...passProps} />
  </Fragment>
));
