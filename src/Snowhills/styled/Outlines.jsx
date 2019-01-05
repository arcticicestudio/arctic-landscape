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

import { POSE_DRAW, POSE_ERASE } from "../../shared/constants";
import outlinePaths from "../pathData";
import { baseOutlinePoseConfig } from "../../shared/poseConfig";
import outline from "../../shared/styles";

const poseConfig = {
  [POSE_DRAW]: {
    staggerChildren: ({ outlineDelay }) => outlineDelay / (outlinePaths.length * 2),
    delayChildren: ({ outlineDelay }) => outlineDelay / outlinePaths.length
  },
  [POSE_ERASE]: {
    staggerChildren: ({ pathDelayRevert }) => pathDelayRevert / (outlinePaths.length * 2),
    delayChildren: ({ pathDelayRevert }) => pathDelayRevert / outlinePaths.length
  }
};

const Path = posed.path(baseOutlinePoseConfig);

const Group = styled(posed.g(poseConfig))`
  ${outline};
`;

/* eslint-disable-next-line react/prop-types */
export default React.memo(({ outlineStyles, ...passProps }) => (
  <Group outlineStyles={outlineStyles}>
    {outlinePaths.map(p => (
      <Path key={p} d={p} {...passProps} />
    ))}
  </Group>
));
