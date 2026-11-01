import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const PEEK_A_POP_FACEBOOK_POST_URL =
  "https://www.facebook.com/makerverse.ph/posts/pfbid029ME6AkyzZC6eqtU9Ui4oyctNxWVkfrrkAJ78FoHGPqe1NQizzLLUmgqSJmcHv31vl";

const SLUG = "/blog/peek-a-pop-3d-printed-party-favors-gifts-dipolog";

export const PEEK_A_POP_ARTICLE = {
  slug: SLUG,
  title: "PEEK A POP: 3D-Printed Party Favors and Gifts",
  category: "Makerverse Toy Lab",
  author: "Makerverse",
  publishedDate: "2026-10-30",
  publishedDateLabel: "October 30, 2026",
  readingTime: "4 minutes",
  tags: [
    "PEEK A POP",
    "Makerverse Toy Lab",
    "3D-Printed Creations",
    "Party Favors PH",
    "Personalized Gifts PH",
    "Christmas Ornaments",
    "We Ship Nationwide",
    "Dipolog City",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "PEEK A POP by Makerverse Toy Lab graphic with the line PEEK, PEEK… POP! Where shapes meet surprises, an illustrated popping treat container, star and ornament, and a We ship nationwide badge",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    occasions: {
      src: `${SLUG}/make-it-yours-occasions.jpg`,
      alt: "Make it YOURS graphic: Birthdays? YES! Christmas? ABSOLUTELY! Giveaways and keepsakes? YOU BET!, with tags for treat containers, party favors, festive ornaments, personalized gifts and custom designs",
      caption:
        "Pick your colors, choose your shapes, make it yours. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "PEEK A POP BY MAKERVERSE TOY LAB",
    subheadline:
      "PEEK, PEEK… POP! Say hello to PEEK A POP, where shapes meet surprises: 3D-printed treat containers, party favors, festive ornaments and personalized gifts, shipped nationwide from Dipolog City.",
    badge: "We ship nationwide",
  },
  socialExcerpt:
    "PEEK, PEEK… POP! Treat containers, party favors, ornaments and personalized gifts from PEEK A POP by Makerverse Toy Lab. Pick your colors, choose your shapes. We ship nationwide!",
  seo: {
    title: "PEEK A POP: 3D-Printed Party Favors and Gifts",
    description:
      "Meet PEEK A POP by Makerverse Toy Lab: custom 3D-printed treat containers, party favors, ornaments and personalized gifts from Dipolog. We ship nationwide!",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "PEEK, PEEK… POP! Meet PEEK A POP by Makerverse Toy Lab",
    openGraphDescription:
      "Treat containers, party favors, festive ornaments and personalized gifts. Pick your colors, choose your shapes, make it yours. We ship nationwide!",
    keywords: [
      "PEEK A POP",
      "3D-printed party favors Philippines",
      "personalized gifts PH",
      "custom treat containers",
      "3D-printed Christmas ornaments",
      "birthday giveaways and souvenirs",
      "Makerverse Toy Lab",
      "3D printing Dipolog City",
      "Zamboanga del Norte gifts",
      "we ship nationwide",
    ],
  },
  card: {
    title: "PEEK A POP: 3D-Printed Party Favors and Gifts",
    excerpt:
      "PEEK, PEEK… POP! Custom 3D-printed treat containers, party favors, ornaments and personalized gifts from Makerverse Toy Lab. We ship nationwide!",
    category: "Makerverse Toy Lab",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "PEEK A POP by Makerverse Toy Lab graphic: PEEK, PEEK… POP! Where shapes meet surprises",
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
  supportingImages: { occasions: MiraQuestArticleImage };
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
