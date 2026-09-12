import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Alien Planet Segments configuration.
 * Xenobiological discovery journey: Touchdown Basin -> Spore Forest -> Crystal Geysers.
 */
export const alienSegments: WorldSegment[] = [
  {
    id: "alien-01",
    order: 0,
    name: "Touchdown Basin",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #180828, #0F766E, #84CC16)",
      altText: "Alien touchdown basin with green moon, distant xenolith ridges, and acid cyan crater floor",
    },
  },
  {
    id: "alien-02",
    order: 1,
    name: "Spore Forest",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #311042, #047857, #A3E635)",
      altText: "Bioluminescent spore forest with towering alien mushrooms and floating spore clouds",
    },
  },
  {
    id: "alien-03",
    order: 2,
    name: "Crystal Geysers",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #0F172A, #134E4A, #4D7C0F)",
      altText: "Alien mineral landscape with erupting acid geysers and glowing green crystalline spires",
    },
  },
  {
    id: "alien-04",
    order: 3,
    name: "Spire Chasm",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #1E1B4B, #0D9488, #4D7C0F)",
      altText: "Deep canyon studded with razor-sharp bioluminescent rock needles",
    },
  },
  {
    id: "alien-05",
    order: 4,
    name: "Xenolith Ridge",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #0F051D, #115E59, #84CC16)",
      altText: "High jagged volcanic ridge overlooking sulfur-green paper atmospheric mists",
    },
  },
  {
    id: "alien-06",
    order: 5,
    name: "Bioluminescent Marsh",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #2E1065, #047857, #65A30D)",
      altText: "Shallow pools of glowing liquid surrounded by sponge-like alien flora",
    },
  },
  {
    id: "alien-07",
    order: 6,
    name: "Sulphur Geysers",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #1E1035, #0F766E, #EAB308)",
      altText: "Steaming vents surrounded by bright yellow-green crust mineral formations",
    },
  },
  {
    id: "alien-08",
    order: 7,
    name: "Crater Outpost",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #09090B, #1E293B, #14B8A6)",
      altText: "Modular scientific geodesic domes resting within a tiered impact crater",
    },
  },
  {
    id: "alien-09",
    order: 8,
    name: "Amethyst Dunes",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #3B0764, #701A75, #A21CAF)",
      altText: "Rolling windswept dunes of sparkling purple crystal particulate",
    },
  },
  {
    id: "alien-10",
    order: 9,
    name: "Prismatic Horizon",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #0D0414, #064E3B, #84CC16)",
      altText: "Tri-chromatic aurora shimmering above the alien planet curved horizon",
    },
  },
];
