export interface MiraQuestArticleMetadata {
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
  supportingImages: {
    vessel: MiraQuestArticleImage;
    electronics: MiraQuestArticleImage;
  };
  hero: {
    eyebrow: string;
    subheadline: string;
    badge: string;
  };
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
}

export interface MiraQuestArticleImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const MIRAQUEST_ARTICLE = {
  slug: '/blog/miraquest-usv-dipag-river-deployment',
  title: 'MiraQuest USV Begins Its First Mission on the Dipag River',
  category: 'Innovation and Autonomous Systems',
  author: 'Makerverse',
  publishedDate: '2026-07-29',
  publishedDateLabel: 'July 29, 2026',
  readingTime: '5 minutes',
  tags: [
    'MiraQuest USV',
    'Unmanned Surface Vehicle',
    'Dipag River',
    'River Survey',
    'Autonomous Systems',
    'Robotics',
    'Environmental Monitoring',
    'Engineering Education',
    'Makerverse',
    'Andres Bonifacio College',
  ],
  coverImage: '/miraquest-usv-first-deployment.jpeg',
  coverImageAlt:
    'MiraQuest USV first deployment poster featuring the Makerverse team and unmanned research vessel on the Dipag River',
  coverImageWidth: 853,
  coverImageHeight: 1280,
  supportingImages: {
    vessel: {
      src: '/miraquest-usv-dipag-river.jpeg',
      alt: 'Blue-and-orange MiraQuest catamaran platform floating on the Dipag River',
      caption: 'The MiraQuest catamaran platform afloat during its preliminary deployment on the Dipag River.',
      width: 960,
      height: 1280,
    },
    electronics: {
      src: '/miraquest-usv-electronics-integration.jpeg',
      alt: 'Powered controller board, camera, wiring, and display arranged on a workbench for MiraQuest system testing',
      caption: 'A bench setup used to integrate and test MiraQuest’s control and camera electronics.',
      width: 960,
      height: 1280,
    },
  },
  hero: {
    eyebrow: 'MIRAQUEST USV | FIELD DEPLOYMENT',
    subheadline:
      'Makerverse and Andres Bonifacio College engineering interns conducted the preliminary deployment of a locally developed unmanned surface vehicle designed to support river surveying, mapping, and environmental monitoring.',
    badge: 'Locally Developed Autonomous Research Platform',
  },
  socialExcerpt:
    'A locally developed unmanned research vessel has taken its first major step toward autonomous river mapping. Makerverse and Andres Bonifacio College engineering interns recently deployed the MiraQuest USV on the Dipag River for preliminary site assessment and mission planning.',
  seo: {
    title: 'MiraQuest USV Begins Dipag River Survey | Makerverse',
    description:
      'Makerverse and Andres Bonifacio College engineering interns completed the preliminary deployment of the MiraQuest USV for river survey, autonomous mapping, and environmental monitoring.',
    canonicalUrl: 'https://makerverse.ph/blog/miraquest-usv-dipag-river-deployment',
    openGraphTitle: 'MiraQuest USV Begins Its First Mission on the Dipag River',
    openGraphDescription:
      'See how Makerverse and engineering interns from Andres Bonifacio College prepared the locally developed MiraQuest USV for autonomous river surveying and environmental monitoring.',
    keywords: [
      'MiraQuest USV',
      'Dipag River survey',
      'unmanned surface vehicle Philippines',
      'autonomous river mapping',
      'environmental monitoring robot',
      'Makerverse Dipolog',
      'robotics innovation Philippines',
      'Andres Bonifacio College engineering',
    ],
  },
  card: {
    title: 'MiraQuest USV Begins Its First Mission on the Dipag River',
    excerpt:
      'Makerverse and Andres Bonifacio College engineering interns completed the preliminary Dipag River deployment of the MiraQuest unmanned research vessel.',
    category: 'Autonomous Systems',
    image: '/miraquest-usv-first-deployment.jpeg',
    imageAlt:
      'MiraQuest USV first deployment poster featuring the Makerverse team and unmanned research vessel on the Dipag River',
    href: '/blog/miraquest-usv-dipag-river-deployment',
  },
} as const satisfies MiraQuestArticleMetadata;
