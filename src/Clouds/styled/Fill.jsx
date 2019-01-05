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

import { fillPaths } from "../pathData";
import nord from "../../shared/nord";
import { baseFillPoseConfig } from "../../shared/poseConfig";

const Fill = styled(posed.g(baseFillPoseConfig))`
  fill: ${nord.nord6};
`;

export default React.memo(props => (
  <Fill {...props}>
    {fillPaths.map(p => (
      <path key={p} d={p} />
    ))}
  </Fill>
));
