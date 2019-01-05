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

import { outlinePaths } from "../pathData";
import { baseOutlinePoseConfig } from "../../shared/poseConfig";
import outline from "../../shared/styles";

const Group = styled.g`
  ${outline};
`;

const Path = posed.path(baseOutlinePoseConfig);

/* eslint-disable-next-line react/prop-types */
export default React.memo(({ outlineStyles, ...passProps }) => (
  <Group outlineStyles={outlineStyles}>
    {outlinePaths.map(p => (
      <Path key={p} d={p} {...passProps} />
    ))}
  </Group>
));
