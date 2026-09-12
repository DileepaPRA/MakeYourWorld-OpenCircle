import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing City Segments configuration.
 * Urban growth progression: Brownstone Street -> Town Square -> Transit District.
 */
export const citySegments: WorldSegment[] = [
  {
    id: "city-01",
    order: 0,
    name: "Brownstone Street",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #CBD5E1, #94A3B8, #1E293B)",
      altText: "Neighborhood street with terracotta brownstones, sidewalk, and roadway",
    },
  },
  {
    id: "city-02",
    order: 1,
    name: "Town Square",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #E2E8F0, #CBD5E1)",
      altText: "Civic town square with classical clock tower hall and stone plaza floor",
    },
  },
  {
    id: "city-03",
    order: 2,
    name: "Transit District",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #94A3B8, #475569, #1E293B)",
      altText: "Urban transit hub with elevated railway canopy and ground station platform",
    },
  },
  {
    id: "city-04",
    order: 3,
    name: "Central Green Park",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #E0F2FE, #22C55E)",
      altText: "Lush urban paper park with paved walking paths and shaded benches",
    },
  },
  {
    id: "city-05",
    order: 4,
    name: "Towering Skyline",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #334155, #1E293B, #0F172A)",
      altText: "Geometric slate paper skyscrapers with glowing office grid windows",
    },
  },
  {
    id: "city-06",
    order: 5,
    name: "Harbor Promenade",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #BAE6FD, #0284C7)",
      altText: "Bustling coastal pier with wooden boardwalk and harbor boat moorings",
    },
  },
  {
    id: "city-07",
    order: 6,
    name: "Old Brick Warehouse",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #94A3B8, #78350F, #451A03)",
      altText: "Historic brick factory district transformed with paper artist lofts",
    },
  },
  {
    id: "city-08",
    order: 7,
    name: "Artisan Alley",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #CBD5E1, #F1F5F9, #64748B)",
      altText: "Cozy cobblestone pedestrian lane lined with cafes and boutique storefronts",
    },
  },
  {
    id: "city-09",
    order: 8,
    name: "Civic Plaza",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #E2E8F0, #F8FAFC, #94A3B8)",
      altText: "Grand monumental stone staircase facing an open public gathering lawn",
    },
  },
  {
    id: "city-10",
    order: 9,
    name: "Metro Junction",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #475569, #334155, #1E293B)",
      altText: "High-speed interchange viaduct illuminated by warm amber streetlights",
    },
  },
];
