/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React from "react";

import nord from "../../shared/nord";
import { AURORA_BOREALIS_GLEAM_GRADIENT_ID } from "../../shared/constants";

const GleamGradient = () => (
  <defs>
    <linearGradient id={AURORA_BOREALIS_GLEAM_GRADIENT_ID} x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stopColor={nord.nord7}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord.nord7}; ${nord.nord8}; ${nord.nord7}`}
        />
      </stop>
      <stop offset="50%" stopColor={nord.nord8}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord.nord8}; ${nord.nord9}; ${nord.nord8}`}
        />
      </stop>
      <stop offset="100%" stopColor={nord.nord9}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord.nord9}; ${nord.nord10}; ${nord.nord9}`}
        />
      </stop>
    </linearGradient>
  </defs>
);

export default GleamGradient;
