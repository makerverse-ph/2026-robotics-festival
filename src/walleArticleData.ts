import type { MiraQuestArticleImage } from './miraquestArticleData';

export const WALLE_FACEBOOK_POST_URL = 'https://www.facebook.com/reel/1067500792736185/';

export const WALLE_ARTICLE = {
  slug: '/blog/3d-printed-wall-e-robot-model-dipolog',
  title: 'From Screen to Shelf: Liam’s 3D Printed WALL-E Model',
  category: 'Maker Spotlight and 3D Printing',
  author: 'Makerverse',
  publishedDate: '2026-09-24',
  publishedDateLabel: 'September 24, 2026',
  readingTime: '4 minutes',
  tags: [
    '3D Printing',
    'Maker Spotlight',
    'Robot Model',
    'WALL-E',
    'STEM Learning',
    'Robotics',
    'Future Makers',
    'Makerverse Dipolog',
  ],
  coverImage: '/blog/3d-printed-wall-e-robot-model-dipolog/cover.jpg',
  coverImageAlt:
    'Makerverse illustration of a 3D printer building a small orange robot layer by layer, titled From a digital design to a robot you can hold',
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    workflow: {
      src: '/blog/3d-printed-wall-e-robot-model-dipolog/3d-printing-workflow.jpg',
      alt: 'Five-step 3D printing workflow: get inspired, design or find a model, slice it, print layer by layer, then assemble and improve',
      caption: 'The basic journey of a 3D printed model, from an idea on a screen to a finished piece you can hold.',
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: 'MAKER SPOTLIGHT | 3D PRINTING',
    subheadline:
      'Liam brought a WALL-E model to life through 3D printing, turning something that existed on a screen into something real. Here is why builds like this are where making begins.',
    badge: 'From a digital design to a robot you can hold',
  },
  socialExcerpt:
    'From a digital design to a robot you can hold! Liam brought this WALL-E model to life through 3D printing, turning something that existed on a screen into something real.',
  seo: {
    title: '3D Printed WALL-E Robot Model | Makerverse Dipolog',
    description:
      'Liam turned a WALL-E design into a real model through 3D printing. See how digital designs become builds you can hold, and start your own at Makerverse Dipolog.',
    canonicalUrl: 'https://makerverse.ph/blog/3d-printed-wall-e-robot-model-dipolog',
    openGraphTitle: 'From Screen to Shelf: Liam’s 3D Printed WALL-E Model',
    openGraphDescription:
      'A robot that existed on a screen, now one you can hold. See Liam’s 3D printed WALL-E model and learn how 3D printing turns ideas into real builds at Makerverse.',
    keywords: [
      '3D printing Dipolog',
      '3D printed robot model',
      'WALL-E 3D print',
      '3D printing for kids Philippines',
      'Makerverse Dipolog',
      'STEM learning Zamboanga del Norte',
      'robotics for kids Dipolog City',
      'maker education Philippines',
    ],
  },
  card: {
    title: 'From Screen to Shelf: Liam’s 3D Printed WALL-E Model',
    excerpt:
      'Liam brought a WALL-E model to life through 3D printing, turning something that existed on a screen into something real. This is where making begins.',
    category: 'Maker Spotlight',
    image: '/blog/3d-printed-wall-e-robot-model-dipolog/cover.jpg',
    imageAlt:
      'Makerverse illustration of a 3D printer building a small orange robot layer by layer',
    href: '/blog/3d-printed-wall-e-robot-model-dipolog',
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
  supportingImages: { workflow: MiraQuestArticleImage };
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
