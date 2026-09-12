import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Village Segments configuration.
 * Rural community growth: River Watermill -> Cobblestone Street -> Market Square.
 */
export const villageSegments: WorldSegment[] = [
  {
    id: "village-01",
    order: 0,
    name: "River Watermill",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #FEF3C7, #65A30D, #3F6212)",
      altText: "Riverside village backdrop with timber waterwheel, stone bridge, and green banks",
    },
  },
  {
    id: "village-02",
    order: 1,
    name: "Cobblestone Street",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #FEF08A, #FFFBEB, #D6D3D1)",
      altText: "Warm thatched cottages alongside a stone-paved village street",
    },
  },
  {
    id: "village-03",
    order: 2,
    name: "Market Square",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #FEF08A, #FFEDD5, #E7E5E4)",
      altText: "Lively village market square with colorful stalls and central stone well",
    },
  },
  {
    id: "village-04",
    order: 3,
    name: "Artisan Workshop Quarter",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #FED7AA, #FFEDD5, #78350F)",
      altText: "Timber-framed craft workshops with smoking chimneys and clay pots",
    },
  },
  {
    id: "village-05",
    order: 4,
    name: "Festive Village Green",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #FEF08A, #4D7C0F)",
      altText: "Open grassy pasture with decorative pennants and rustic paper benches",
    },
  },
  {
    id: "village-06",
    order: 5,
    name: "Old Mill Pond",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #E0F2FE, #A7F3D0, #14532D)",
      altText: "Still water basin framed by weeping willow cutouts and cattails",
    },
  },
  {
    id: "village-07",
    order: 6,
    name: "Orchard Lane",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #FEF9C3, #DCFCE7, #15803D)",
      altText: "Winding earth path flanked by blooming fruit trees and low stone walls",
    },
  },
  {
    id: "village-08",
    order: 7,
    name: "Timber Bridge",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #E0E7FF, #C7D2FE, #4338CA)",
      altText: "Rustic arched wooden bridge crossing a sparkling clear creek",
    },
  },
  {
    id: "village-09",
    order: 8,
    name: "Bakers Row",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #FFEDD5, #FED7AA, #9A3412)",
      altText: "Warm stone storefronts with paper bread displays and flower boxes",
    },
  },
  {
    id: "village-10",
    order: 9,
    name: "Hillside Chapel",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #FCE7F3, #EDE9FE, #5B21B6)",
      altText: "Quiet stone tower chapel overlooking the rooftops from a grassy knoll",
    },
  },
];
