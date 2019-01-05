/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

import React from "react";
import PropTypes from "prop-types";
import posed from "react-pose";

import { AURORA_BOREALIS_GLEAM_GRADIENT_ID, POSE_DRAW, POSE_ERASE } from "./shared/constants";
import AuroraBorealis from "./AuroraBorealis";
import Clouds from "./Clouds";
import Mountains from "./Mountains";
import Snowhills from "./Snowhills";
import Wind from "./Wind";
import calcPoseTimings from "./calcPoseTimings";

const Svg = posed.svg({});

/**
 * An animated drawing of an arctic landscape.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @version 0.1.0
 */
const ArcticLandscape = ({ auroraBorealisGleamGradientId, duration, pose, onAnimationComplete, outlineStyles }) => {
  const { auroraBorealis, clouds, fills, mountains, snowhills, wind } = calcPoseTimings(duration);

  return (
    <Svg
      onPoseComplete={onAnimationComplete}
      pose={pose}
      viewBox="0 0 624.443 278.807"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AuroraBorealis
        auroraBorealisGleamGradientId={auroraBorealisGleamGradientId}
        outlineDelay={auroraBorealis.outlineDelay}
        outlineStyles={outlineStyles}
        {...fills}
      />
      <Clouds outlineDelay={clouds.outlineDelay} outlineStyles={outlineStyles} {...fills} />
      <Wind outlineDelay={wind.outlineDelay} outlineDuration={wind.outlineDuration} outlineStyles={outlineStyles} />
      <Mountains
        outlineDelay={mountains.outlineDelay}
        outlineDuration={mountains.outlineDuration}
        outlineStyles={outlineStyles}
        shadeFillDelay={mountains.fillDelay}
        shadeFillDuration={mountains.fillDuration}
        {...fills}
      />
      <Snowhills
        outlineDelay={snowhills.outlineDelay}
        outlineDuration={snowhills.outlineDuration}
        outlineStyles={outlineStyles}
      />
    </Svg>
  );
};

ArcticLandscape.propTypes = {
  /**
   * The ID of the `<linear-gradient>` element for the component that represents the "Aurora Borealis".
   *
   * @since 0.1.0
   */
  auroraBorealisGleamGradientId: PropTypes.string,

  /**
   * The total animation duration.
   *
   * @since 0.1.0
   */
  duration: ({ duration }, propName, componentName) =>
    duration < 0 &&
    !Number.isNaN(duration) &&
    new Error(
      `Invalid prop "${propName}" of value "${duration}" supplied to "${componentName}", expected a non-negative number.`
    ),

  /**
   * The function that gets called when the animation is completed.
   *
   * @since 0.1.0
   */
  onAnimationComplete: PropTypes.func,

  /**
   * The additional interpolated CSS styles for all outlines.
   *
   * @since 0.1.0
   */
  outlineStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object]),

  /**
   * The name of the animation pose.
   *
   * @since 0.1.0
   */
  pose: PropTypes.oneOf([POSE_DRAW, POSE_ERASE]).isRequired
};

ArcticLandscape.defaultProps = {
  auroraBorealisGleamGradientId: AURORA_BOREALIS_GLEAM_GRADIENT_ID,
  duration: 4000,
  onAnimationComplete: () => {},
  outlineStyles: () => {}
};

ArcticLandscape.displayName = "ArcticLandscape";

export default ArcticLandscape;
