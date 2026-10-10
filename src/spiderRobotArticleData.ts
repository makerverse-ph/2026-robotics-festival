import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const SPIDER_FACEBOOK_POST_URL =
  "https://www.facebook.com/reel/1717336632697420/";

const SLUG = "/blog/makerverse-spider-robot-work-in-progress-dipolog";

export const SPIDER_ARTICLE = {
  slug: SLUG,
  title: "Makerverse Spider Robot: Work-in-Progress Update",
  category: "Robotics Projects",
  author: "Makerverse",
  publishedDate: "2026-10-09",
  publishedDateLabel: "October 9, 2026",
  readingTime: "4 minutes",
  tags: [
    "Spider Robot",
    "Robotics",
    "Multi-Legged Robot",
    "Servo Calibration",
    "Work in Progress",
    "STEM Education",
    "Learn Create Innovate",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse graphic titled Makerverse Spider Robot, with an illustrated eight-legged robot in orange and blue and the lines Eight legs, one epic robot. Built to crawl, born to innovate.",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    calibration: {
      src: `${SLUG}/spider-robot-calibration.jpg`,
      alt: "Makerverse graphic titled From random twitches to smooth strides, listing what the team is tuning on the spider robot: servo angles, linkages and movement patterns, with the line Without calibration, coordinates are just guesses",
      caption:
        "What we are tuning on the Makerverse Spider Robot: servo angles, linkages and movement patterns. Illustration by Makerverse; watch the reel on Facebook to see the real robot.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "ROBOTICS | BEHIND THE SCENES",
    subheadline:
      "From loose wires and random servo twitches to smooth, synchronized multi-jointed strides. Behind the scenes in our learning center, we are bringing the Makerverse Spider Robot to life.",
    badge: "Work in progress",
  },
  socialExcerpt:
    "From loose wires and random servo twitches to smooth, synchronized strides: see how the Makerverse Spider Robot is coming to life in Dipolog City.",
  seo: {
    title: "Makerverse Spider Robot Build Update | Dipolog Robotics",
    description:
      "Go behind the scenes of the Makerverse Spider Robot in Dipolog City, an eight-legged build where servo calibration turns random twitches into smooth strides.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Makerverse Spider Robot: Work-in-Progress Update",
    openGraphDescription:
      "From loose wires and random servo twitches to smooth, synchronized strides: see how the Makerverse Spider Robot is coming to life in Dipolog City.",
    keywords: [
      "spider robot",
      "Makerverse Spider Robot",
      "robotics Dipolog",
      "multi-legged robot build",
      "servo calibration robotics",
      "robotics classes Dipolog City",
      "STEM education Zamboanga del Norte",
      "robotics for kids Philippines",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Makerverse Spider Robot: Work-in-Progress Update",
    excerpt:
      "Eight legs, one epic robot. See how testing and calibration are turning random servo twitches into smooth strides in our learning center.",
    category: "Robotics",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse graphic titled Makerverse Spider Robot with an illustrated eight-legged robot",
    href: SLUG,
  },
} as const satisfies {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedDate: string;
  publishedDateLabel: string;
  readingTime: string;
  tags: readonly string[];
  coverImage: string;
  coverImageAlt: string;
  coverImageWidth: number;
  coverImageHeight: number;
  supportingImages: { calibration: MiraQuestArticleImage };
  hero: { eyebrow: string; subheadline: string; badge: string };
  socialExcerpt: string;
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    openGraphTitle: string;
    openGraphDescription: string;
    keywords: readonly string[];
  };
  card: {
    title: string;
    excerpt: string;
    category: string;
    image: string;
    imageAlt: string;
    href: string;
  };
};
