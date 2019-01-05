/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React from "react";
import posed from "react-pose";
import styled from "styled-components";

import { peaksPath } from "../pathData";
import nord from "../../shared/nord";
import { baseFillPoseConfig } from "../../shared/poseConfig";

const Peaks = styled(posed.path(baseFillPoseConfig))`
  fill: ${nord.nord6};
`;

export default React.memo(props => <Peaks d={peaksPath} {...props} />);
