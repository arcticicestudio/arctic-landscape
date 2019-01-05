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

import { shadeLinesPath, shadePaths } from "../pathData";
import nord from "../../shared/nord";
import { baseFillPoseConfig } from "../../shared/poseConfig";

const Fill = styled(posed.g(baseFillPoseConfig))`
  fill: ${nord.nord0};
`;

const Shade = styled.path`
  opacity: 0.1;
  stroke: ${nord.nord1};
`;

const ShadeLine = styled(Shade)`
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 2;
`;

export default React.memo(props => (
  <Fill {...props}>
    <ShadeLine d={shadeLinesPath} />
    {shadePaths.map(p => (
      <Shade key={p} d={p} />
    ))}
  </Fill>
));
