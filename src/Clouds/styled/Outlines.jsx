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

import { outlinePaths } from "../pathData";
import { cloudsOutlinePoseConfig } from "../../shared/poseConfig";
import outline from "../../shared/styles";

const Outline = styled(posed.path(cloudsOutlinePoseConfig))`
  ${outline};
`;

export default React.memo(props => (
  <Fragment>
    {outlinePaths.map(p => (
      <Outline key={p} d={p} {...props} />
    ))}
  </Fragment>
));
