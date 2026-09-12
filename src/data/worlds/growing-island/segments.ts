import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Island Segments configuration.
 * Coastal exploration journey: Arrival Beach -> Palm Lagoon -> Volcanic Ridge.
 */
export const islandSegments: WorldSegment[] = [
  {
    id: "island-01",
    order: 0,
    name: "Arrival Beach",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #38BDF8, #0284C7, #FDE68A)",
      altText: "Tropical island arrival beach with golden sand, shallow turquoise water, and distant volcanic peaks",
    },
  },
  {
    id: "island-02",
    order: 1,
    name: "Palm Lagoon",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #15803D, #0D9488)",
      altText: "Lush tropical palm lagoon with inland turquoise water basin and jungle terraces",
    },
  },
  {
    id: "island-03",
    order: 2,
    name: "Volcanic Ridge",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #0369A1, #18181B, #27272A)",
      altText: "Elevated volcanic mountain summit with dark rocky crags and panoramic ocean horizon",
    },
  },
  {
    id: "island-04",
    order: 3,
    name: "Coastal Lookout Bluff",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #38BDF8, #0EA5E9, #15803D)",
      altText: "High grass-topped sea cliff overlooking crashing whitecap waves",
    },
  },
  {
    id: "island-05",
    order: 4,
    name: "Historic Beacon Point",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #075985, #1E293B)",
      altText: "Weathered stone lighthouse point signaling ships across twilight waters",
    },
  },
  {
    id: "island-06",
    order: 5,
    name: "Hidden Sea Cove",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #38BDF8, #059669)",
      altText: "Secluded sandy inlet sheltered by steep limestone arches",
    },
  },
  {
    id: "island-07",
    order: 6,
    name: "Coral Atoll",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #0D9488, #115E59)",
      altText: "Circular ring of paper coral protecting a calm turquoise lagoon",
    },
  },
  {
    id: "island-08",
    order: 7,
    name: "Jungle Waterfall",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #047857, #064E3B)",
      altText: "Cascading freshwater torrent spilling over emerald paper jungle cliffs",
    },
  },
  {
    id: "island-09",
    order: 8,
    name: "Tide Pool Terraces",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #38BDF8, #FDE68A, #78350F)",
      altText: "Stepped volcanic rock pools holding miniature marine micro-worlds",
    },
  },
  {
    id: "island-10",
    order: 9,
    name: "Starfish Sandbar",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #E0F2FE, #FEF08A, #0284C7)",
      altText: "Low sandbar barely cresting the tide under vast tropical paper skies",
    },
  },
];
