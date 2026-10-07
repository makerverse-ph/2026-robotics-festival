import type { MiraQuestArticleImage } from './miraquestArticleData';

/** "More designs added" post (October 5, 2026). */
export const LOOTBAGS_FACEBOOK_POST_URL =
  'https://www.facebook.com/makerverse.ph/posts/pfbid02pyDDnY1NbwoYkZrC6H7idMNTYnAvi7CECLw4sW7txbRG44Qg5KDg71vUiAfWXjsNl';
/** First loot bag announcement post (October 4, 2026). */
export const LOOTBAGS_LAUNCH_FACEBOOK_POST_URL =
  'https://www.facebook.com/makerverse.ph/posts/pfbid0BrF8eN4YA9gjBXefjdbrbhJ7Fj6MSfkwF4gGZpCfcUFUUhrAD3XAQZ2vGTMUAewxl';

const SLUG = '/blog/halloween-trick-or-treat-mini-loot-bags-dipolog';

export const LOOTBAGS_ARTICLE = {
  slug: SLUG,
  title: 'Trick-or-Treat Mini Fun Loot Bags Now in Dipolog',
  category: 'Maker Products and Seasonal',
  author: 'Makerverse',
  publishedDate: '2026-10-05',
  publishedDateLabel: 'October 5, 2026',
  readingTime: '4 minutes',
  tags: [
    'Halloween',
    'Trick or Treat',
    'Mini Fun Loot Bags',
    'Halloween Treats',
    'Classroom Treats',
    'Wholesale Pre-Order',
    'Get N Go Boulevard',
    'Maker Products',
    'Dipolog City',
    'Makerverse Dipolog',
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    'Makerverse Halloween graphic titled Trick-or-Treat Mini Fun Loot Bags, with an illustrated pumpkin, ghost and spiderweb treat bag, a ₱99 per set price tag and the note available now at Get N Go Boulevard',
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    quickFacts: {
      src: `${SLUG}/loot-bags-quick-facts.jpg`,
      alt: 'Quick facts graphic for Makerverse Trick-or-Treat Mini Fun Loot Bags: ₱99 per set, mini chocolates inside, available now at Get N Go Boulevard, wholesale pre-order for 10 sets and up',
      caption:
        'Quick facts: ₱99 per set with mini chocolates inside, available now at Get N Go Boulevard, with wholesale pre-order for 10 sets and up. Actual chocolate contents may vary.',
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: 'HALLOWEEN | MAKER PRODUCTS',
    subheadline:
      'Make Halloween extra sweet and spooky! Our Trick-or-Treat Mini Fun Loot Bags are only ₱99 per set with mini chocolates inside, available now at Get N Go Boulevard, and more designs have just been added.',
    badge: 'More designs added!',
  },
  socialExcerpt:
    'Trick-or-Treat Mini Fun Loot Bags are here: ₱99 per set with mini chocolates inside, available now at Get N Go Boulevard. Wholesale pre-order for 10 sets and up.',
  seo: {
    title: 'Trick-or-Treat Mini Fun Loot Bags in Dipolog | Makerverse',
    description:
      'Makerverse Trick-or-Treat Mini Fun Loot Bags are ₱99 per set with mini chocolates inside, at Get N Go Boulevard, Dipolog. Wholesale pre-order for 10+ sets.',
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: 'Trick-or-Treat Mini Fun Loot Bags Now in Dipolog',
    openGraphDescription:
      'More designs added! Makerverse Trick-or-Treat Mini Fun Loot Bags are ₱99 per set with mini chocolates inside, available now at Get N Go Boulevard.',
    keywords: [
      'trick or treat loot bags Dipolog',
      'Halloween loot bags Dipolog City',
      'Halloween treats Dipolog',
      'Halloween classroom treats',
      'Halloween party giveaways Zamboanga del Norte',
      'wholesale Halloween treats Philippines',
      'Get N Go Boulevard Dipolog',
      'trick or treat Dipolog',
      'Makerverse Dipolog',
    ],
  },
  card: {
    title: 'Trick-or-Treat Mini Fun Loot Bags Now in Dipolog',
    excerpt:
      'More designs added! Our Mini Fun Loot Bags are ₱99 per set with mini chocolates inside, available now at Get N Go Boulevard.',
    category: 'Halloween',
    image: `${SLUG}/cover.jpg`,
    imageAlt: 'Makerverse Halloween graphic titled Trick-or-Treat Mini Fun Loot Bags with a ₱99 per set price tag',
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
  supportingImages: { quickFacts: MiraQuestArticleImage };
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
  card: { title: string; excerpt: string; category: string; image: string; imageAlt: string; href: string };
};
