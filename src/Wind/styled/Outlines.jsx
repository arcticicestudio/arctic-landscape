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

import outlinePath from "../pathData";
import { baseOutlinePoseConfig } from "../../shared/poseConfig";
import outline from "../../shared/styles";

const Outlines = styled(posed.path(baseOutlinePoseConfig))`
  ${outline};
`;

export default React.memo(props => <Outlines d={outlinePath} {...props} />);
