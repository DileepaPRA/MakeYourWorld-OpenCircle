import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Single starting placement for Growing Farm in Segment 01 (Homestead Yard).
 */
export const farmPlacements: ObjectPlacement[] = [
  {
    objectId: "scarecrow",
    segmentId: "farm-01",
    x: 32.0,
    y: 65.0,
    scale: 1.1,
    rotation: 1,
  },
  // Phase F: Starter placements for new segments 04–10
  {
    id: "farm-04-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-04",
    x: 28.0,
    y: 62.0,
    scale: 1.05,
    rotation: -1,
  },
  {
    id: "farm-05-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-05",
    x: 72.0,
    y: 66.0,
    scale: 1.15,
    rotation: 2,
  },
  {
    id: "farm-06-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-06",
    x: 40.0,
    y: 60.0,
    scale: 1.0,
    rotation: 0,
  },
  {
    id: "farm-07-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-07",
    x: 68.0,
    y: 64.0,
    scale: 1.1,
    rotation: -2,
  },
  {
    id: "farm-08-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-08",
    x: 25.0,
    y: 63.0,
    scale: 0.95,
    rotation: 1,
  },
  {
    id: "farm-09-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-09",
    x: 78.0,
    y: 68.0,
    scale: 1.2,
    rotation: -3,
  },
  {
    id: "farm-10-scarecrow-1",
    objectId: "scarecrow",
    segmentId: "farm-10",
    x: 52.0,
    y: 65.0,
    scale: 1.05,
    rotation: 0,
  },
];
