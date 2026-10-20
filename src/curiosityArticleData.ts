import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const CURIOSITY_FACEBOOK_POST_URL =
  "https://www.facebook.com/makerverse.ph/posts/pfbid0hvmqxn59Crpj8LjGybo7LAKVDKWLjXA9jJBtsmQg4NZyuTYEgZXAurgAgBwaReQxl";

const SLUG = "/blog/no-passport-needed-just-curiosity-makerverse-dipolog";

export const CURIOSITY_ARTICLE = {
  slug: SLUG,
  title: "No Passport Needed: Just Bring Your Curiosity",
  category: "Makerverse Life",
  author: "Makerverse",
  publishedDate: "2026-10-20",
  publishedDateLabel: "October 20, 2026",
  readingTime: "4 minutes",
  tags: [
    "Welcome to Makerverse",
    "Curiosity",
    "STEM Education",
    "Robotics",
    "Coding",
    "Creative Technology",
    "Learn Create Innovate",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse graphic with the headline No passport needed. Just your curiosity!, an illustrated Makerverse Pass card labeled Curiosity and a Welcome stamp",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    checklist: {
      src: `${SLUG}/makerverse-entry-checklist.jpg`,
      alt: "Makerverse checklist graphic: you don't need a passport, ticket, visa or suitcase; you only need your curiosity, then explore robotics, coding, AI and creative technology",
      caption:
        "The Makerverse entry checklist: leave the passport and suitcase at home. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "MAKERVERSE LIFE | WELCOME",
    subheadline:
      "Makerverse is a hands-on learning center in Dipolog City, not another country. No passport, ticket or visa required: all you need to begin is your curiosity.",
    badge: "Welcome to Makerverse",
  },
  socialExcerpt:
    "Bro brought every document except his common sense. Welcome to Makerverse: no passport, ticket or visa needed, just your curiosity!",
  seo: {
    title: "No Passport Needed, Just Curiosity | Makerverse Dipolog",
    description:
      "No passport, ticket or visa needed: all you need to start at Makerverse in Dipolog City is curiosity. Explore robotics, coding, AI and creative tech.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "No Passport Needed: Just Bring Your Curiosity",
    openGraphDescription:
      "Welcome to Makerverse! No passport, ticket or visa needed, just your curiosity. DM us to start your Makerverse journey in Dipolog City.",
    keywords: [
      "curiosity-driven learning",
      "welcome to Makerverse",
      "STEM education Dipolog City",
      "robotics classes Dipolog",
      "coding for kids Zamboanga del Norte",
      "hands-on learning center Philippines",
      "creative technology for students",
      "AI and robotics for kids Dipolog",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "No Passport Needed: Just Bring Your Curiosity",
    excerpt:
      "Bro brought every document except his common sense! Entering Makerverse doesn't need a passport, ticket or visa. You only need your curiosity.",
    category: "Makerverse Life",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse graphic: No passport needed. Just your curiosity!, with a Makerverse Pass card",
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
  supportingImages: { checklist: MiraQuestArticleImage };
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
