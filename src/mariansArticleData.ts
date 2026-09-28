import type { MiraQuestArticleImage } from './miraquestArticleData';

export const MARIANS_FACEBOOK_POST_URL = 'https://www.facebook.com/reel/1409992664531896/';

const SLUG = '/blog/saint-marys-academy-dipolog-makerverse-trial-class';

export const MARIANS_ARTICLE = {
  slug: SLUG,
  title: 'Thank You, Marians! SMAD Visits the Makerverse Trial Class',
  category: 'School Visit and Trial Class',
  author: 'Makerverse',
  publishedDate: '2026-09-28',
  publishedDateLabel: 'September 28, 2026',
  readingTime: '4 minutes',
  tags: [
    'Trial Class',
    'School Visit',
    'Saint Mary’s Academy of Dipolog',
    'Robotics',
    'Coding',
    'Electronics',
    'AI',
    '3D Printing',
    'STEM Learning',
    'Makerverse Dipolog',
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    'Makerverse graphic with an open orange door and a small robot icon, titled A Big Thank You to the Marians, for the Saint Mary’s Academy of Dipolog trial class visit',
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    explore: {
      src: `${SLUG}/explore-technology-areas.jpg`,
      alt: 'Six technology areas to explore at Makerverse Dipolog: robotics, coding, electronics, AI, 3D printing and creative technology',
      caption:
        'Robotics, coding, electronics, AI, 3D printing and creative technology: the areas Makerverse invites every curious learner to explore.',
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: 'SCHOOL VISIT | TRIAL CLASS',
    subheadline:
      'Students of Saint Mary’s Academy of Dipolog visited Makerverse and took part in our Trial Class. Here is our thank-you to the Marians, and an open invitation to every curious learner.',
    badge: 'Curiosity is where innovation begins',
  },
  socialExcerpt:
    'A big thank you to the Marians! Students of Saint Mary’s Academy of Dipolog visited Makerverse and took part in our Trial Class.',
  seo: {
    title: 'Makerverse Trial Class Dipolog | Saint Mary’s Academy Visit',
    description:
      'Saint Mary’s Academy of Dipolog students joined a Makerverse Trial Class to explore technology. See the visit and how your school or child can join us too.',
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: 'Thank You, Marians! SMAD Visits the Makerverse Trial Class',
    openGraphDescription:
      'Students of Saint Mary’s Academy of Dipolog visited Makerverse for a Trial Class in robotics, coding, AI and more. Curiosity is where innovation begins.',
    keywords: [
      'Makerverse trial class Dipolog',
      'Saint Mary’s Academy of Dipolog',
      'SMAD Dipolog',
      'school field trip robotics Dipolog',
      'robotics class Dipolog City',
      'coding for kids Zamboanga del Norte',
      'STEM learning center Dipolog',
      'AI and 3D printing for students Philippines',
      'Makerverse Dipolog',
    ],
  },
  card: {
    title: 'Thank You, Marians! SMAD Visits the Makerverse Trial Class',
    excerpt:
      'Students of Saint Mary’s Academy of Dipolog visited Makerverse and took part in our Trial Class, exploring technology with curiosity and enthusiasm.',
    category: 'School Visit',
    image: `${SLUG}/cover.jpg`,
    imageAlt: 'Makerverse graphic titled A Big Thank You to the Marians with an open orange door',
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
  supportingImages: { explore: MiraQuestArticleImage };
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
