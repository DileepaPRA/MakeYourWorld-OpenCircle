import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Farm Segments configuration.
 * Agricultural cultivation journey: Homestead Yard -> Wheat Fields -> Pasture Windmill.
 */
export const farmSegments: WorldSegment[] = [
  {
    id: "farm-01",
    order: 0,
    name: "Homestead Yard",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #65A30D, #3F6212)",
      altText: "Homestead yard with red barn, garden orchard ridge, and golden dirt path",
    },
  },
  {
    id: "farm-02",
    order: 1,
    name: "Wheat Fields",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #CA8A04, #FACC15)",
      altText: "Golden wheat field terraces beneath rolling hills and warm sunshine",
    },
  },
  {
    id: "farm-03",
    order: 2,
    name: "Pasture Windmill",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #4D7C0F, #3F6212)",
      altText: "Pasture grazing field with tall lattice windmill and rustic wooden paddock fence",
    },
  },
  {
    id: "farm-04",
    order: 3,
    name: "Apple Orchard Valley",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #16A34A, #15803D)",
      altText: "Terraced rows of red paper apple trees on gentle sloping hillsides",
    },
  },
  {
    id: "farm-05",
    order: 4,
    name: "Harvest Barn Plateau",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #B45309, #78350F)",
      altText: "Wide farm clearing stacked high with golden straw bales and hay wagons",
    },
  },
  {
    id: "farm-06",
    order: 5,
    name: "Sunflower Meadows",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #EAB308, #854D0E)",
      altText: "Bright expansive field of nodding yellow paper sunflowers",
    },
  },
  {
    id: "farm-07",
    order: 6,
    name: "Quiet Duck Pond",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #E0F2FE, #38BDF8, #15803D)",
      altText: "Serene pond with lilypads, cattails, and wooden boat dock",
    },
  },
  {
    id: "farm-08",
    order: 7,
    name: "Old Stone Silo",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #94A3B8, #64748B, #475569)",
      altText: "Cylindrical fieldstone grain silo towering over agricultural fields",
    },
  },
  {
    id: "farm-09",
    order: 8,
    name: "Haystack Terrace",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #FEF08A, #FACC15, #CA8A04)",
      altText: "Golden terraced hillside dotted with traditional thatched hay mows",
    },
  },
  {
    id: "farm-10",
    order: 9,
    name: "Rustic Vineyard",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #FCE7F3, #831843, #4C0519)",
      altText: "Arched grape arbors strung along sun-warmed southern stone ridges",
    },
  },
];
