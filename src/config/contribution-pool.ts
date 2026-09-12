/**
 * Authoritative Contribution Pool and World Segment Scaling Configuration.
 * Centralized boundaries for Growing Worlds.
 */

/** Target number of active, unassigned open contribution issues */
export const CONTRIBUTION_POOL_SIZE = 100;

/** Spatial structure: target continuous segments/frames per world */
export const MAX_SEGMENTS_PER_WORLD = 10;

/** Maximum object placements per segment before automatic frame overflow recommendation */
export const MAX_OBJECTS_PER_SEGMENT = 20;

/** Rate-limiting batch safety cap for a single GitHub Actions replenishment run */
export const MAX_CREATE_PER_RUN = 20;
