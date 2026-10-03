import type { MiraQuestArticleImage } from './miraquestArticleData';

export const HALLOWEEN_FACEBOOK_POST_URL = 'https://www.facebook.com/reel/2494669537722697/';

const SLUG = '/blog/halloween-3d-thermoformed-treats-dipolog';

export const HALLOWEEN_ARTICLE = {
  slug: SLUG,
  title: 'Halloween 3D Thermoformed Treats Now in Dipolog',
  category: 'Maker Products and Seasonal',
  author: 'Makerverse',
  publishedDate: '2026-10-03',
  publishedDateLabel: 'October 3, 2026',
  readingTime: '4 minutes',
  tags: [
    'Halloween',
    'Trick or Treat',
    '3D Thermoforming',
    'Maker Products',
    'Get N’ Go',
    'Dipolog City Boulevard',
    'Digital Fabrication',
    '3D Printing',
    'STEM Learning',
    'Makerverse Dipolog',
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    'Makerverse Halloween graphic with a smiling orange pumpkin shell, a ghost and wrapped candy, titled Trick-or-Treat 3D Thermoformed Treats, available at Get N’ Go, Dipolog City Boulevard Gateway',
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    thermoforming: {
      src: `${SLUG}/how-thermoforming-works.jpg`,
      alt: 'Three-step diagram of how thermoforming works in general: design a mold, heat a plastic sheet, then form it over the mold into a 3D shape',
      caption:
        'Thermoforming in general: a mold is designed, a plastic sheet is heated until soft, and the sheet is formed over the mold to take its 3D shape.',
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: 'HALLOWEEN | MAKER PRODUCTS',
    subheadline:
      'It’s Halloween season, Makers! Our Trick-or-Treat 3D Thermoformed treats are ready, something delicious is hiding inside, and you can find them at Get N’ Go, Dipolog City Boulevard Gateway.',
    badge: 'Come and visit… if you dare!',
  },
  socialExcerpt:
    'It’s Halloween season, Makers! Our Trick-or-Treat 3D Thermoformed treats are ready at Get N’ Go, Dipolog City Boulevard Gateway, and something delicious is hiding inside.',
  seo: {
    title: 'Halloween 3D Thermoformed Treats in Dipolog | Makerverse',
    description:
      'Makerverse Trick-or-Treat 3D Thermoformed treats are ready for Halloween in Dipolog. Find them at Get N’ Go, Dipolog City Boulevard Gateway. Come and visit!',
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: 'Halloween 3D Thermoformed Treats Now in Dipolog',
    openGraphDescription:
      'Spook-tacular news, Makers! Makerverse Trick-or-Treat 3D Thermoformed treats are at Get N’ Go, Dipolog City Boulevard Gateway. Something delicious is hiding inside.',
    keywords: [
      'Halloween 3D thermoformed treats Dipolog',
      'Halloween treats Dipolog City',
      'trick or treat Dipolog',
      'Get N’ Go Dipolog City Boulevard',
      '3D thermoforming Philippines',
      'thermoforming for students',
      'maker products Zamboanga del Norte',
      '3D printing Dipolog',
      'Makerverse Dipolog',
    ],
  },
  card: {
    title: 'Halloween 3D Thermoformed Treats Now in Dipolog',
    excerpt:
      'Our Trick-or-Treat 3D Thermoformed treats are ready at Get N’ Go, Dipolog City Boulevard Gateway, with something delicious hiding inside.',
    category: 'Halloween',
    image: `${SLUG}/cover.jpg`,
    imageAlt: 'Makerverse Halloween graphic titled Trick-or-Treat 3D Thermoformed Treats with a smiling pumpkin shell',
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
  supportingImages: { thermoforming: MiraQuestArticleImage };
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
