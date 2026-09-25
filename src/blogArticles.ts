import { MIRAQUEST_ARTICLE } from './miraquestArticleData';
import { WALLE_ARTICLE } from './walleArticleData';

/** Fields every blog article exposes to routing, SEO and the homepage updates section. */
export interface BlogArticleSummary {
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  publishedDateLabel: string;
  readingTime: string;
  tags: readonly string[];
  coverImage: string;
  coverImageAlt: string;
  coverImageWidth: number;
  coverImageHeight: number;
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

export const ARTICLE_PAGES = {
  miraquest: MIRAQUEST_ARTICLE,
  walle: WALLE_ARTICLE,
} as const satisfies Record<string, BlogArticleSummary>;

export type ArticlePageKind = keyof typeof ARTICLE_PAGES;

/** All articles, newest first. The first entry is featured on the homepage. */
export const BLOG_ARTICLES: BlogArticleSummary[] = Object.values(ARTICLE_PAGES).sort((a, b) =>
  b.publishedDate.localeCompare(a.publishedDate),
);
