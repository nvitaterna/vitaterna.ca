import fs from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';
import { infer, z } from 'zod';

const ARTICLES_DIRECTORY = path.resolve(process.cwd(), 'src/articles');

const articleSchema = z.object({
  title: z.string(),
  date: z.preprocess((val) => z.date().parse(val).toString(), z.string()),
  description: z.string(),
  tags: z.array(z.string()),
});

export interface ArticleItem extends infer<typeof articleSchema> {
  slug: string;
}

interface Article {
  content: string;
  frontMatter: ArticleItem;
}

const loadArticle = async (slug: string) => {
  const filePath = path.join(ARTICLES_DIRECTORY, `${slug}.mdx`);

  const source = await fs.readFile(filePath);

  const { content, data } = matter(source);

  const parsedData = articleSchema.parse(data);

  return {
    parsedData,
    content,
  };
};

export const getSlugs = async () => {
  const slugs = (await fs.readdir(ARTICLES_DIRECTORY)).map((fileName) => {
    return fileName.replace('.mdx', '');
  });

  return slugs;
};

export const getArticles = async () => {
  const slugs = await getSlugs();

  const articles: ArticleItem[] = await Promise.all(
    slugs.map(async (slug) => {
      const { parsedData } = await loadArticle(slug);

      const article: ArticleItem = {
        ...parsedData,
        slug,
      };

      return article;
    }),
  );

  return articles;
};

export const getArticle = async (slug: string) => {
  const { parsedData, content } = await loadArticle(slug);

  const article: Article = {
    content,
    frontMatter: {
      ...parsedData,
      slug,
    },
  };

  return article;
};
