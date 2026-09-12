import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Single starting placement for Growing Village in Segment 01 (River Watermill).
 */
export const villagePlacements: ObjectPlacement[] = [
  {
    objectId: "flower-pot",
    segmentId: "village-01",
    x: 32.0,
    y: 72.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "wooden-cart",
    segmentId: "village-01",
    x: 60,
    y: 70,
    scale: 1,
    rotation: 10,
  },
  // Phase F: Starter placements for new segments 04–10
  {
    id: "village-04-flower-pot-1",
    objectId: "flower-pot",
    segmentId: "village-04",
    x: 25.0,
    y: 68.0,
    scale: 0.9,
    rotation: 1,
  },
  {
    id: "village-05-wooden-cart-1",
    objectId: "wooden-cart",
    segmentId: "village-05",
    x: 65.0,
    y: 72.0,
    scale: 1.05,
    rotation: -3,
  },
  {
    id: "village-06-flower-pot-1",
    objectId: "flower-pot",
    segmentId: "village-06",
    x: 40.0,
    y: 65.0,
    scale: 1.0,
    rotation: 0,
  },
  {
    id: "village-07-wooden-cart-1",
    objectId: "wooden-cart",
    segmentId: "village-07",
    x: 70.0,
    y: 70.0,
    scale: 1.1,
    rotation: 4,
  },
  {
    id: "village-08-flower-pot-1",
    objectId: "flower-pot",
    segmentId: "village-08",
    x: 30.0,
    y: 66.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    id: "village-09-wooden-cart-1",
    objectId: "wooden-cart",
    segmentId: "village-09",
    x: 55.0,
    y: 68.0,
    scale: 1.0,
    rotation: 2,
  },
  {
    id: "village-10-flower-pot-1",
    objectId: "flower-pot",
    segmentId: "village-10",
    x: 45.0,
    y: 72.0,
    scale: 1.0,
    rotation: 0,
  },
];
