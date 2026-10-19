import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const HANDFAN_FACEBOOK_POST_URL =
  "https://www.facebook.com/reel/1452835690079614/";

const SLUG = "/blog/customized-hand-fan-makerverse-dipolog";

export const HANDFAN_ARTICLE = {
  slug: SLUG,
  title: "Customized Hand Fans at Makerverse Dipolog",
  category: "Maker Creations",
  author: "Makerverse",
  publishedDate: "2026-10-16",
  publishedDateLabel: "October 16, 2026",
  readingTime: "4 minutes",
  tags: [
    "Customized Hand Fan",
    "Personalized Gifts",
    "3D Printing",
    "Creative Technology",
    "Maker Projects",
    "Learn Create Innovate",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse graphic titled Customized Hand Fan, with an illustrated folding hand fan in orange, blue and white panels and the line Beat the heat with a fan that's uniquely YOU",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    oneOfAKind: {
      src: `${SLUG}/make-it-one-of-a-kind.jpg`,
      alt: "Makerverse graphic titled From ordinary fan to extraordinary, with three cards: your style, your creativity and your personality, and the line Come create, customize, and make something amazing with us",
      caption:
        "Style, creativity and personality: the three things that make a Makerverse customized hand fan your own. Illustration by Makerverse; watch the reel on Facebook to see the real fans.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "MAKER CREATIONS | CREATIVE TECHNOLOGY",
    subheadline:
      "Beat the heat with a fan that's uniquely you. Turn an ordinary hand fan into something extraordinary with the Makerverse Customized Hand Fan, made your way in Dipolog City.",
    badge: "Now at Makerverse",
  },
  socialExcerpt:
    "Turn an ordinary hand fan into something extraordinary. Add your own style, creativity and personality with a Customized Hand Fan from Makerverse Dipolog.",
  seo: {
    title: "Customized Hand Fans in Dipolog City | Makerverse",
    description:
      "Beat the heat with a customized hand fan from Makerverse in Dipolog City. Add your own style, creativity and personality to make a fan that is truly yours.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Customized Hand Fans at Makerverse Dipolog",
    openGraphDescription:
      "Turn an ordinary hand fan into something extraordinary. Add your own style, creativity and personality with a Customized Hand Fan from Makerverse Dipolog.",
    keywords: [
      "customized hand fan",
      "customized hand fan Dipolog",
      "personalized hand fan Philippines",
      "custom fan Dipolog City",
      "3D printing Dipolog",
      "maker projects Zamboanga del Norte",
      "creative technology Dipolog",
      "personalized gifts Dipolog",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Customized Hand Fans at Makerverse Dipolog",
    excerpt:
      "Beat the heat with a fan that's uniquely you. Add your own style, creativity and personality to an ordinary hand fan at Makerverse.",
    category: "Maker Creations",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse graphic titled Customized Hand Fan with an illustrated folding hand fan",
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
  supportingImages: { oneOfAKind: MiraQuestArticleImage };
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
