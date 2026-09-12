import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Fantasy World Segments configuration.
 * Magical discovery journey: Enchanted Glade -> Rune Arch -> High Spire.
 */
export const fantasySegments: WorldSegment[] = [
  {
    id: "fantasy-01",
    order: 0,
    name: "Enchanted Glade",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #3B0764, #7E22CE, #064E3B)",
      altText: "Enchanted forest glade with giant bioluminescent mushroom canopy and glowing river path",
    },
  },
  {
    id: "fantasy-02",
    order: 1,
    name: "Rune Arch",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #2E1065, #6B21A8, #042F2E)",
      altText: "Ancient stone portal arch inscribed with glowing runes before floating crystal islands",
    },
  },
  {
    id: "fantasy-03",
    order: 2,
    name: "High Spire",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #1E1B4B, #4C1D95, #0F172A)",
      altText: "Towering wizard high spire with stepping floating islets and starlit mystic nebula sky",
    },
  },
  {
    id: "fantasy-04",
    order: 3,
    name: "Floating Crystal Isle",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #4C1D95, #7C3AED, #065F46)",
      altText: "Anti-gravity paper landmass anchored by pulsing violet crystal formations",
    },
  },
  {
    id: "fantasy-05",
    order: 4,
    name: "Starlit Dragon Peak",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #1E1B4B, #581C87, #0F172A)",
      altText: "Craggy jagged mountain summit illuminated by swirling arcane aurorae",
    },
  },
  {
    id: "fantasy-06",
    order: 5,
    name: "Ancient Elven Bridge",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #312E81, #4338CA, #047857)",
      altText: "Living root bridge woven with white paper blossoms over a misty canyon",
    },
  },
  {
    id: "fantasy-07",
    order: 6,
    name: "Celestial Shrine",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #581C87, #9333EA, #F59E0B)",
      altText: "White marble altar surrounded by floating rings of golden paper starlight",
    },
  },
  {
    id: "fantasy-08",
    order: 7,
    name: "Mage Tower Terrace",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #1E1035, #3B0764, #1E1B4B)",
      altText: "High battlement parapet holding arcane astronomical brass apparatus",
    },
  },
  {
    id: "fantasy-09",
    order: 8,
    name: "Fairy Ring Glade",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #3B0764, #6D28D9, #064E3B)",
      altText: "Secret mossy hollow encircled by glowing bioluminescent fungi",
    },
  },
  {
    id: "fantasy-10",
    order: 9,
    name: "Astral Gateway",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #0F0A1C, #2E1065, #0B0914)",
      altText: "Grand dimensional archway opening onto a swirling paper cosmos",
    },
  },
];
