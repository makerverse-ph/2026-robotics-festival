import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const TOY_LAB_FACEBOOK_POST_URL =
  "https://www.facebook.com/makerverse.ph/posts/pfbid032zkGCcrLFSujuXFvzJ94nFoRGiuhufc5t379wEZ8Z6pvWEsXriqDquggp3zPwzFbl";

const SLUG = "/blog/makerverse-toy-lab-3d-printed-toys-pop-up-dipolog";

export const TOY_LAB_ARTICLE = {
  slug: SLUG,
  title: "Makerverse Toy Lab: 3D-Printed Fun Pop-Up Coming Soon",
  category: "Makerverse Toy Lab",
  author: "Makerverse",
  publishedDate: "2026-10-24",
  publishedDateLabel: "October 24, 2026",
  readingTime: "4 minutes",
  tags: [
    "Makerverse Toy Lab",
    "Pick and Create",
    "3D Printed",
    "Pop-Up Coming Soon",
    "Tiny Things Big Happiness",
    "Fidgets and Clickers",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse Toy Lab graphic with the line Pick. Create. Take home something fun., illustrated 3D-printed lamp, clicker keys, fidget, star collectible and keychain, and a Watch for our pop-up soon badge",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    lineup: {
      src: `${SLUG}/toy-lab-lineup.jpg`,
      alt: "Makerverse Toy Lab lineup graphic with five cards: 3D-printed lamps, Make Your Own Clickers, fidgets, collectibles, and keychains, charms and more",
      caption:
        "The Makerverse Toy Lab lineup announced on our Facebook page. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "MAKERVERSE TOY LAB | COMING SOON",
    subheadline:
      "Something fun is printing in Dipolog City! Meet Makerverse Toy Lab, where you pick, create and take home 3D-printed lamps, clickers, fidgets, collectibles, keychains, charms and more.",
    badge: "Pop-up coming soon",
  },
  socialExcerpt:
    "SOMETHING FUN IS PRINTING! Meet Makerverse Toy Lab: pick, create and take home 3D-printed lamps, clickers, fidgets, collectibles and more. Watch for our pop-up soon!",
  seo: {
    title: "Makerverse Toy Lab: 3D-Printed Toys in Dipolog City",
    description:
      "Meet Makerverse Toy Lab in Dipolog City: pick, create and take home 3D-printed lamps, clickers, fidgets, collectibles and keychains. Pop-up coming soon!",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Makerverse Toy Lab: 3D-Printed Fun Pop-Up Coming Soon",
    openGraphDescription:
      "Something fun is printing! Pick, create and take home 3D-printed lamps, clickers, fidgets, collectibles and more at the Makerverse Toy Lab pop-up in Dipolog City.",
    keywords: [
      "Makerverse Toy Lab",
      "3D-printed toys Dipolog City",
      "3D-printed lamps Philippines",
      "make your own clicker",
      "3D-printed fidgets and collectibles",
      "custom keychains and charms Dipolog",
      "pop-up store Dipolog City",
      "3D printing Zamboanga del Norte",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Makerverse Toy Lab: 3D-Printed Fun Pop-Up Coming Soon",
    excerpt:
      "Something fun is printing! Pick, create and take home 3D-printed lamps, clickers, fidgets, collectibles and more. Watch for our pop-up soon.",
    category: "Makerverse Toy Lab",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse Toy Lab graphic: Pick. Create. Take home something fun., with a pop-up coming soon badge",
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
  supportingImages: { lineup: MiraQuestArticleImage };
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
