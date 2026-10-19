import type { MiraQuestArticleImage } from "./miraquestArticleData";

export const BLASTOFF_FACEBOOK_POST_URL =
  "https://www.facebook.com/reel/1607936857169355/";

const SLUG = "/blog/blast-off-program-smart-attendance-rfid-system-dipolog";

export const BLASTOFF_ARTICLE = {
  slug: SLUG,
  title: "Blast Off: Cassandra Builds a Smart RFID Attendance System",
  category: "Student Projects",
  author: "Makerverse",
  publishedDate: "2026-10-17",
  publishedDateLabel: "October 17, 2026",
  readingTime: "4 minutes",
  tags: [
    "Blast Off Program",
    "Smart Attendance System",
    "RFID",
    "Student Projects",
    "Robotics",
    "STEM for Kids",
    "Learn Create Innovate",
    "Dipolog City",
    "Makerverse Dipolog",
  ],
  coverImage: `${SLUG}/cover.jpg`,
  coverImageAlt:
    "Makerverse graphic titled BLAST OFF: Level Up Your Skills, with an illustrated rocket and RFID card and the line Congratulations, Cassandra! 2nd program completed, with her very own Smart Attendance RFID System",
  coverImageWidth: 1200,
  coverImageHeight: 630,
  supportingImages: {
    pathway: {
      src: `${SLUG}/makerverse-program-pathway.jpg`,
      alt: "Makerverse graphic titled Finished the 1st program? Keep going!, showing the program pathway: 1 Ignition Track, 2 Blast Off (highlighted), 3 Lift Off and 4 Ascent (coming soon)",
      caption:
        "The Makerverse program pathway: Blast Off is the second step after the beginner Ignition Track. Illustration by Makerverse.",
      width: 1200,
      height: 640,
    },
  },
  hero: {
    eyebrow: "STUDENT PROJECTS | BLAST OFF",
    subheadline:
      "Congratulations to Cassandra for completing our second program, BLAST OFF, and creating her very own Smart Attendance RFID System in Dipolog City.",
    badge: "Program completed",
  },
  socialExcerpt:
    "Congratulations to Cassandra for completing BLAST OFF, the second Makerverse program, and building her very own Smart Attendance RFID System.",
  seo: {
    title: "Blast Off Program: Smart RFID Attendance | Makerverse",
    description:
      "Cassandra completed Blast Off, the second Makerverse program in Dipolog City, by building her own Smart Attendance RFID System. See how students level up.",
    canonicalUrl: `https://makerverse.ph${SLUG}`,
    openGraphTitle: "Blast Off: Cassandra Builds a Smart RFID Attendance System",
    openGraphDescription:
      "Congratulations to Cassandra for completing BLAST OFF, the second Makerverse program, and building her very own Smart Attendance RFID System.",
    keywords: [
      "Blast Off program",
      "smart attendance RFID system",
      "RFID project for students",
      "robotics classes Dipolog City",
      "STEM for kids Dipolog",
      "student robotics projects Philippines",
      "STEM education Zamboanga del Norte",
      "coding and electronics for kids",
      "Makerverse Dipolog",
    ],
  },
  card: {
    title: "Blast Off: Cassandra Builds a Smart RFID Attendance System",
    excerpt:
      "Cassandra completed our second program, BLAST OFF, and created her very own Smart Attendance RFID System. Finished the first program? Don't stop there!",
    category: "Student Projects",
    image: `${SLUG}/cover.jpg`,
    imageAlt:
      "Makerverse graphic titled BLAST OFF: Level Up Your Skills with an illustrated rocket and RFID card",
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
  supportingImages: { pathway: MiraQuestArticleImage };
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
