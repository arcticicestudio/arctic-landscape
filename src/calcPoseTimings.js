/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Landscape
 * Repository: https://github.com/arcticicestudio/arctic-landscape
 * License:    MIT
 */

/**
 * Calculates the delay and duration timings for all pose animations based on the passed total time.
 *
 * @method calcPoseTimings
 * @return {Object} The calculated pose animation timings
 * @since 0.1.0
 */
const calcPoseTimings = totalTime => {
  let timeLeft = totalTime;

  /* Calculate total mountains outline animation duration. */
  const mountainsOutlineDuration = timeLeft * 0.6;
  timeLeft -= mountainsOutlineDuration;

  /* Calculate past time until snowhills outline animation starts. */
  const snowhillsOutlineDelay = mountainsOutlineDuration * 0.25;

  /* Calculate total snowhills outline animation duration. */
  const snowhillsOutlineDuration = mountainsOutlineDuration - snowhillsOutlineDelay;

  /* Calculate past time until wind outline animation starts. */
  const windOutlineDelay = mountainsOutlineDuration * 0.85;

  /* Calculate total wind outline animation duration. */
  const windOutlineDuration = mountainsOutlineDuration - windOutlineDelay;

  /* Calculate past time until clouds outline animation starts. */
  const cloudsOutlineDelay = mountainsOutlineDuration;

  /* Subtract approximate duration buffer for spring based cloud outline animation. */
  const cloudsOutlineDurationBuffer = timeLeft * 0.25;
  timeLeft -= cloudsOutlineDurationBuffer;

  /* Calculate past time until aurora borealis outline animation starts. */
  const auroraBorealisOutlineDelay = cloudsOutlineDelay + cloudsOutlineDurationBuffer;

  /* Subtract approximate duration buffer for spring based aurora borealis outline animation. */
  const auroraBorealisOutlineDurationBuffer = timeLeft * 0.35;
  timeLeft -= auroraBorealisOutlineDurationBuffer;

  /* Calculate past time until all fill animations start. */
  const fillDelay = auroraBorealisOutlineDelay + auroraBorealisOutlineDurationBuffer;

  /* Calculate total duration of all fill animations. */
  const fillDuration = timeLeft * 0.6;
  timeLeft -= fillDuration;

  /* Calculate past time until mountains shade animation starts. */
  const mountainsShadeFillDelay = fillDelay + fillDuration;

  /* Calculate total mountains shade fill animation duration. */
  const mountainsShadeFillDuration = timeLeft;

  return {
    auroraBorealis: {
      outlineDelay: auroraBorealisOutlineDelay
    },
    clouds: {
      outlineDelay: cloudsOutlineDelay
    },
    fills: {
      fillDelay,
      fillDuration
    },
    mountains: {
      outlineDuration: mountainsOutlineDuration,
      fillDelay: mountainsShadeFillDelay,
      fillDuration: mountainsShadeFillDuration
    },
    snowhills: {
      outlineDelay: snowhillsOutlineDelay,
      outlineDuration: snowhillsOutlineDuration
    },
    wind: {
      outlineDelay: windOutlineDelay,
      outlineDuration: windOutlineDuration
    }
  };
};

export default calcPoseTimings;
