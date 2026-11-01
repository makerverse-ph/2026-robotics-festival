import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const CLICKERS_FACEBOOK_POST_URL =
  "https://www.facebook.com/reel/1484099223787979/";

const SLUG = "/blog/makerverse-toy-lab-3d-printed-clickers-dipolog";

export const CLICKERS_ARTICLE = {
  slug: SLUG,
  title: "Click, Click! 3D-Printed Clickers at Makerverse Toy Lab",
  category: "Makerverse Toy Lab",
  author: "Makerverse",
  publishedDate: "2026-10-29",
  publishedDateLabel: "October 29, 2026",
  readingTime: "4 minutes",
  tags: [
    "Makerverse Toy Lab",
    "3D-Printed Clickers",
    "Click. Create. Customize.",
    "Creative Builds",
    "Robotics",
    "STEM Education",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse Toy Lab graphic with the line Click… Click… What's that sound?, illustrated orange, yellow and teal 3D-printed clicker keys spelling CLICK, and a More is coming badge",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    steps: {
      src: `${SLUG}/click-create-customize.jpg`,
      alt: "Three-card graphic reading Click: 3D-printed clickers, Create: creative builds and robotics, Customize: endless customization",
      caption:
        "Click. Create. Customize. The three ideas behind the Makerverse Toy Lab teaser. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "MAKERVERSE TOY LAB | SNEAK PEEK",
    subheadline:
      "Click… click… what's that sound? Something exciting is taking shape at Makerverse Toy Lab in Dipolog City, from 3D-printed clickers to creative builds, robotics and endless customization.",
    badge: "More is coming",
  },
  socialExcerpt:
    "Click… Click… What's that sound? From 3D-printed clickers to creative builds, robotics and endless customization, something exciting is taking shape at Makerverse Toy Lab.",
  seo: {
    title: "3D-Printed Clickers at Makerverse Toy Lab Dipolog",
    description:
      "Click, click! Makerverse Toy Lab in Dipolog City is shaping 3D-printed clickers, creative builds, robotics and custom designs. Catch us at the Toy Lab booth.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Click, Click! 3D-Printed Clickers at Makerverse Toy Lab",
    openGraphDescription:
      "Something exciting is taking shape at Makerverse Toy Lab: 3D-printed clickers, creative builds, robotics and endless customization. See you soon, Dipolog!",
    keywords: [
      "3D-printed clickers",
      "Makerverse Toy Lab",
      "custom 3D-printed clicker Dipolog",
      "3D printing Dipolog City",
      "creative builds and robotics",
      "STEM education Zamboanga del Norte",
      "3D-printed toys Philippines",
      "Makerverse Toy Lab booth",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Click, Click! 3D-Printed Clickers at Makerverse Toy Lab",
    excerpt:
      "Click… click… what's that sound? 3D-printed clickers, creative builds, robotics and endless customization are taking shape at Makerverse Toy Lab.",
    category: "Makerverse Toy Lab",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse Toy Lab graphic: Click… Click… What's that sound?, with illustrated 3D-printed clicker keys",
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
  supportingImages: { steps: MiraQuestArticleImage };
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
