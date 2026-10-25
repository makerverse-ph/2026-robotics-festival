import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const PRODUCTION_DAY_FACEBOOK_POST_URL =
  "https://www.facebook.com/makerverse.ph/posts/pfbid02uLoo6mrURpopBS7QNj4s48dBLTvuGWw1mDgzdBoNoEv546zyaBqANcMGejWNek6Yl";

const SLUG = "/blog/production-day-3d-printing-makerverse-dipolog";

export const PRODUCTION_DAY_ARTICLE = {
  slug: SLUG,
  title: "Production Day: 3D Printing in Action at Makerverse",
  category: "3D Printing",
  author: "Makerverse",
  publishedDate: "2026-10-23",
  publishedDateLabel: "October 23, 2026",
  readingTime: "4 minutes",
  tags: [
    "Production Day",
    "3D Printing",
    "Digital Fabrication",
    "Batch Printing",
    "Maker Lab",
    "STEM Education",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse graphic with the headline Production Day! beside an illustrated 3D printer building a lattice-patterned part, with finished pieces lined up below",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    steps: {
      src: `${SLUG}/3d-printing-batch-steps.jpg`,
      alt: "Four-step Makerverse graphic showing how a 3D print batch comes together: design the model, slice it into layers, print layer by layer, then finish and check the pieces",
      caption:
        "How a 3D print batch comes together, from digital file to finished pieces. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "3D PRINTING | BEHIND THE SCENES",
    subheadline:
      "Our printers were busy on October 23. Here is a closer look at the production day we shared on Facebook, and what 3D printing in Dipolog City can do for students, families and partners.",
    badge: "Production Day",
  },
  socialExcerpt:
    "Production day! A look behind the scenes as stacks of freshly 3D-printed pieces come off the printers at Makerverse in Dipolog City.",
  seo: {
    title: "Production Day: 3D Printing at Makerverse Dipolog",
    description:
      "Production day at Makerverse! See stacks of fresh 3D prints from our Dipolog City maker lab and learn how 3D printing turns digital designs into real objects.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Production Day: 3D Printing in Action at Makerverse",
    openGraphDescription:
      "Production day at Makerverse! A behind-the-scenes look at stacks of fresh 3D prints in Dipolog City, and how 3D printing turns designs into real objects.",
    keywords: [
      "3D printing Dipolog City",
      "3D printing production day",
      "3D printing services Zamboanga del Norte",
      "custom 3D prints Philippines",
      "digital fabrication Dipolog",
      "batch 3D printing",
      "maker lab Dipolog City",
      "STEM education Zamboanga Peninsula",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Production Day: 3D Printing in Action at Makerverse",
    excerpt:
      "Stacks of freshly printed pieces and busy printers: a behind-the-scenes look at production day in our Dipolog City maker lab.",
    category: "3D Printing",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse Production Day! graphic with an illustrated 3D printer and finished lattice-patterned pieces",
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
