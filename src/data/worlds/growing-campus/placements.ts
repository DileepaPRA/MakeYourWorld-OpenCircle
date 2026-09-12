import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Single starting placement for Growing Campus in Segment 01 (University Gate).
 */
export const campusPlacements: ObjectPlacement[] = [
  {
    objectId: "campus-planter",
    segmentId: "campus-01",
    x: 24.0,
    y: 68.0,
    scale: 1.05,
    rotation: 1,
  },
  // Phase F: Starter placements for new segments 04–10
  {
    id: "campus-04-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-04",
    x: 22.0,
    y: 66.0,
    scale: 1.0,
    rotation: 0,
  },
  {
    id: "campus-05-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-05",
    x: 75.0,
    y: 68.0,
    scale: 1.1,
    rotation: -2,
  },
  {
    id: "campus-06-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-06",
    x: 35.0,
    y: 64.0,
    scale: 0.95,
    rotation: 1,
  },
  {
    id: "campus-07-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-07",
    x: 70.0,
    y: 65.0,
    scale: 1.15,
    rotation: 0,
  },
  {
    id: "campus-08-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-08",
    x: 28.0,
    y: 62.0,
    scale: 1.0,
    rotation: -1,
  },
  {
    id: "campus-09-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-09",
    x: 80.0,
    y: 70.0,
    scale: 1.2,
    rotation: 2,
  },
  {
    id: "campus-10-campus-planter-1",
    objectId: "campus-planter",
    segmentId: "campus-10",
    x: 48.0,
    y: 66.0,
    scale: 1.05,
    rotation: 0,
  },
];
