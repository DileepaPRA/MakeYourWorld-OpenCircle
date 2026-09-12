import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Forest Segments configuration.
 * Continuous, 3-segment growing paper diorama environment.
 */
export const forestSegments: WorldSegment[] = [
  {
    id: "forest-01",
    order: 0,
    name: "Ancient Canopy",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #D1E0D7, #E8EDE4, #2E4F3E, #1C3527)",
      altText: "Deep forest paper backdrop with distant peaks and meandering brook",
    },
  },
  {
    id: "forest-02",
    order: 1,
    name: "Sunlit Meadow",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #D9E6DE, #EBF0E6, #365C47, #1C3527)",
      altText: "Sunlit forest clearing with golden paper sun and grassy terraces",
    },
  },
  {
    id: "forest-03",
    order: 2,
    name: "Deep Grove",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #CDE0D9, #E2EBE5, #2F523E, #172C20)",
      altText: "Deep mossy woodland terrace framed by ancient pine silhouettes",
    },
  },
  {
    id: "forest-04",
    order: 3,
    name: "River Crossing",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #C4DBD1, #E2ECE5, #2B5741, #173224)",
      altText: "Babbling river paper rocks with wooden footbridge silhouettes",
    },
  },
  {
    id: "forest-05",
    order: 4,
    name: "Misty Ridge",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #B9D4C7, #DDEAE2, #264D39, #152E20)",
      altText: "Misty woodland crest overlooking pine-covered foothills",
    },
  },
  {
    id: "forest-06",
    order: 5,
    name: "Whispering Ferns",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #C8DDD3, #E6EFE9, #2C5642, #183325)",
      altText: "Sheltered fern clearing dappled with gentle emerald sunlight",
    },
  },
  {
    id: "forest-07",
    order: 6,
    name: "Sunken Hollow",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #BED6CB, #DFEBE3, #28503C, #162F22)",
      altText: "Quiet moss hollow surrounded by ancient gnarled roots",
    },
  },
  {
    id: "forest-08",
    order: 7,
    name: "Pine Crest",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #B5D1C3, #DBE7DF, #244B36, #142B1E)",
      altText: "High ridge dotted with tall evergreen paper silhouettes",
    },
  },
  {
    id: "forest-09",
    order: 8,
    name: "Wildflower Clearing",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #CFE2D8, #EBF3ED, #336149, #1B3828)",
      altText: "Vibrant glade sprinkled with delicate paper petal textures",
    },
  },
  {
    id: "forest-10",
    order: 9,
    name: "Twilight Lookout",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #2B4553, #43625A, #223F31, #11231B)",
      altText: "Dusk-lit forest vista framing the entire diorama valley",
    },
  },
];
