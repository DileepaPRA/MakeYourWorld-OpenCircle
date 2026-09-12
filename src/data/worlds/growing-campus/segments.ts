import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Campus Segments configuration.
 * Collegiate educational journey: University Gate -> Academic Quad -> Library Plaza.
 */
export const campusSegments: WorldSegment[] = [
  {
    id: "campus-01",
    order: 0,
    name: "University Gate",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #E0E7FF, #15803D)",
      altText: "Grand university wrought-iron arch gate with brick pillars and paved entryway path",
    },
  },
  {
    id: "campus-02",
    order: 1,
    name: "Academic Quad",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #881337, #15803D)",
      altText: "Central collegiate quad with brick academic halls and criss-cross stone walkways",
    },
  },
  {
    id: "campus-03",
    order: 2,
    name: "Library Plaza",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #1E3A8A, #CBD5E1)",
      altText: "Classical domed university library facade with terraced steps and paved reading plaza",
    },
  },
  {
    id: "campus-04",
    order: 3,
    name: "Student Union Garden",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-04.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #FEF08A, #16A34A)",
      altText: "Sunny collegiate garden with cafe tables, shade umbrellas, and flower beds",
    },
  },
  {
    id: "campus-05",
    order: 4,
    name: "Hilltop Observatory",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-05.svg",
      cssGradient: "linear-gradient(to bottom, #1E1B4B, #312E81, #0F172A)",
      altText: "Copper-domed telescope observatory cresting a starry campus knoll",
    },
  },
  {
    id: "campus-06",
    order: 5,
    name: "Botanical Greenhouse",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-06.svg",
      cssGradient: "linear-gradient(to bottom, #E0F2FE, #BBF7D0, #15803D)",
      altText: "Victorian glass conservatory filled with exotic paper palms and ferns",
    },
  },
  {
    id: "campus-07",
    order: 6,
    name: "Clocktower Quad",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-07.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #881337, #E2E8F0)",
      altText: "Tall collegiate gothic clocktower ringing over tree-lined stone avenues",
    },
  },
  {
    id: "campus-08",
    order: 7,
    name: "Founders Archway",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-08.svg",
      cssGradient: "linear-gradient(to bottom, #CBD5E1, #94A3B8, #475569)",
      altText: "Monumental carved limestone archway honoring generations of learners",
    },
  },
  {
    id: "campus-09",
    order: 8,
    name: "Campus Amphitheater",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-09.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #FDE047, #166534)",
      altText: "Stepped outdoor stone amphitheater for open-air student performances",
    },
  },
  {
    id: "campus-10",
    order: 9,
    name: "Riverside Path",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-10.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #38BDF8, #1E3A8A)",
      altText: "Peaceful riverside running trail framed by paper weeping willows",
    },
  },
];
