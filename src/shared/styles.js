/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file Provides shared styles.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 */

import { css } from "styled-components";

import nord from "./nord";

const outline = css`
  fill: none;
  stroke-miterlimit: 10;
  stroke-width: 2;
  stroke: ${nord.nord3};
  ${({ outlineStyles }) => outlineStyles};
`;

export default outline;
