import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Single starting placement for Alien Planet in Segment 01 (Touchdown Basin).
 */
export const alienPlacements: ObjectPlacement[] = [
  {
    objectId: "survey-probe",
    segmentId: "alien-01",
    x: 62.0,
    y: 72.0,
    scale: 1.05,
    rotation: 1,
  },
  // Phase F: Starter placements for new segments 04–10
  {
    id: "alien-04-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-04",
    x: 25.0,
    y: 65.0,
    scale: 1.0,
    rotation: -2,
  },
  {
    id: "alien-05-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-05",
    x: 72.0,
    y: 68.0,
    scale: 1.1,
    rotation: 3,
  },
  {
    id: "alien-06-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-06",
    x: 38.0,
    y: 62.0,
    scale: 0.95,
    rotation: 0,
  },
  {
    id: "alien-07-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-07",
    x: 70.0,
    y: 64.0,
    scale: 1.15,
    rotation: -1,
  },
  {
    id: "alien-08-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-08",
    x: 30.0,
    y: 60.0,
    scale: 1.0,
    rotation: 2,
  },
  {
    id: "alien-09-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-09",
    x: 75.0,
    y: 70.0,
    scale: 1.2,
    rotation: -3,
  },
  {
    id: "alien-10-survey-probe-1",
    objectId: "survey-probe",
    segmentId: "alien-10",
    x: 48.0,
    y: 66.0,
    scale: 1.05,
    rotation: 1,
  },
];
