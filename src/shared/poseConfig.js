/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * @file Provides shared pose configurations.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://popmotion.io/pose/api/react-config
 */

import { POSE_DRAW, POSE_ERASE } from "./constants";

const delayOutline = ({ outlineDelay }) => outlineDelay;

const transitionSpringConfig = {
  type: "spring",
  stiffness: 250,
  damping: 12,
  velocity: 2
};

const passive = {
  strokeLinecap: ["pathLength", v => (v === 0 ? "butt" : "round")],
  strokeLinejoin: ["pathLength", v => (v === 0 ? "butt" : "round")]
};

const auroraBorealisOutlinePoseConfig = {
  [POSE_DRAW]: {
    scaleY: 1,
    delay: delayOutline,
    transition: {
      scaleY: transitionSpringConfig
    }
  },
  [POSE_ERASE]: {
    scaleY: 0
  }
};

const baseFillPoseConfig = {
  [POSE_DRAW]: {
    delay: ({ fillDelay }) => fillDelay,
    opacity: 1,
    transition: ({ fillDuration }) => ({
      ease: "easeIn",
      duration: fillDuration
    })
  },
  [POSE_ERASE]: {
    opacity: 0
  }
};

const baseOutlinePoseConfig = {
  [POSE_DRAW]: {
    pathLength: 100,
    delay: delayOutline,
    transition: ({ outlineDuration }) => ({
      duration: outlineDuration,
      /**
       * The `ease-in-quad` transition easing values.
       *
       * @see https://easings.net/#easeInQuad
       */
      ease: [0.55, 0.085, 0.68, 0.53]
    })
  },
  [POSE_ERASE]: {
    pathLength: 0
  },
  passive
};

const cloudsOutlinePoseConfig = {
  [POSE_DRAW]: {
    opacity: 1,
    delay: delayOutline,
    scale: 1,
    transition: {
      scale: transitionSpringConfig
    }
  },
  [POSE_ERASE]: {
    scale: 0,
    opacity: 0
  },
  passive
};

export { baseFillPoseConfig, baseOutlinePoseConfig, auroraBorealisOutlinePoseConfig, cloudsOutlinePoseConfig };
