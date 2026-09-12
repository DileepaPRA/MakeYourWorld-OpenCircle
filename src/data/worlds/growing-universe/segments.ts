import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Universe Segments configuration.
 * Prepared cosmic discovery progression across near-space, planetary horizon, and asteroid belt.
 */
export const universeSegments: WorldSegment[] = [
  {
    id: "universe-01",
    order: 0,
    name: "Starlit Orbit",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #090A16, #1E1B4B, #0F172A)",
      altText: "Deep space cardstock background with home planet horizon and distant starlight",
    },
  },
  {
    id: "universe-02",
    order: 1,
    name: "Planetary Horizon",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #090A16, #2E1065, #0B0D1B)",
      altText: "Cosmic indigo background with ringed paper planet cutout and violet nebula clouds",
    },
  },
  {
    id: "universe-03",
    order: 2,
    name: "Asteroid Belt",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #080714, #18182E, #090A16)",
      altText: "Deep cosmos background with asteroid swarm silhouettes and gas giant horizon",
    },
  },
  {
    id: "universe-04",
    order: 3,
    name: "Radiant Nebula",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #0B0B1E, #3B0764, #1E1B4B)",
      altText: "Vibrant cosmic clouds of magenta and violet paper dust",
    },
  },
  {
    id: "universe-05",
    order: 4,
    name: "Deep Galaxy Vista",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #070913, #1E1035, #0B0E23)",
      altText: "Sweeping view of glowing spiral galaxy arms in deep space",
    },
  },
  {
    id: "universe-06",
    order: 5,
    name: "Binary Solar Rim",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #110B22, #431407, #0B0716)",
      altText: "Distant twin stars casting amber light across dark orbits",
    },
  },
  {
    id: "universe-07",
    order: 6,
    name: "Stardust Expanse",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #060918, #172554, #080C1E)",
      altText: "Scattered stellar clusters forming shimmering constellations",
    },
  },
  {
    id: "universe-08",
    order: 7,
    name: "Quasar Horizon",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #100826, #4C0519, #090615)",
      altText: "Blazing relativistic paper jet piercing distant space",
    },
  },
  {
    id: "universe-09",
    order: 8,
    name: "Pulsar Drift",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #080A1A, #164E63, #070914)",
      altText: "Rhythmic beams of cyan energy illuminating cosmic dust waves",
    },
  },
  {
    id: "universe-10",
    order: 9,
    name: "Cosmic Void Edge",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #03040B, #0A0A12, #020206)",
      altText: "The silent edge of the universe framed by lonely distant stars",
    },
  },
];
