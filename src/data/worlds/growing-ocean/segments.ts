import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Ocean Segments configuration.
 * Vertical marine depth journey: Shallow Reef -> Kelp Forest -> Twilight Shelf.
 */
export const oceanSegments: WorldSegment[] = [
  {
    id: "ocean-01",
    order: 0,
    name: "Shallow Reef",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #0284C7, #FDE68A)",
      altText: "Sunlit shallow ocean reef with filtered light rays and warm sandy seabed",
    },
  },
  {
    id: "ocean-02",
    order: 1,
    name: "Kelp Forest",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #0369A1, #042F2E)",
      altText: "Deep cyan water column with towering kelp fronds and rocky sea shelf",
    },
  },
  {
    id: "ocean-03",
    order: 2,
    name: "Twilight Shelf",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #075985, #0C4A6E, #02141C)",
      altText: "Twilight deep ocean shelf with faint bioluminescent spore accents",
    },
  },
  {
    id: "ocean-04",
    order: 3,
    name: "Open Blue Current",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #38BDF8, #0284C7, #0369A1)",
      altText: "Vibrant sweeping marine current carry schooling paper cutouts",
    },
  },
  {
    id: "ocean-05",
    order: 4,
    name: "Abyssal Glow Trench",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #034E6C, #062C3E, #010B10)",
      altText: "Deep oceanic trench illuminated by faint neon marine spores",
    },
  },
  {
    id: "ocean-06",
    order: 5,
    name: "Sunken Shipwreck Reef",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #0369A1, #075985, #082F49)",
      altText: "Ancient wooden ship timbers enveloped in blooming coral paper shapes",
    },
  },
  {
    id: "ocean-07",
    order: 6,
    name: "Thermal Vent Basin",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #075985, #0E3B43, #1A1A24)",
      altText: "Subsea mineral chimneys emitting stylized plumes of paper bubbles",
    },
  },
  {
    id: "ocean-08",
    order: 7,
    name: "Kelp Canopy Run",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #0EA5E9, #0284C7, #064E3B)",
      altText: "Dense emerald kelp tops swaying beneath sunlit ocean ripples",
    },
  },
  {
    id: "ocean-09",
    order: 8,
    name: "Bioluminescent Cavern",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #082F49, #042F2E, #02120D)",
      altText: "Submerged grotto glowing with phosphorescent green and cyan moss",
    },
  },
  {
    id: "ocean-10",
    order: 9,
    name: "Deep Trench Floor",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #021E2E, #01131C, #00070A)",
      altText: "The lowest marine diorama floor with pristine cardstock mineral ridges",
    },
  },
];
