import fs from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';

import { Tag } from '../tag/tag.schema';

import { articleSchema, Article } from './article.schema';

const ARTICLES_DIRECTORY = path.resolve(process.cwd(), 'articles');

export class ArticleRepository {
  private setupPromise: Promise<void> | null = null;

  private articles: Article[] = [];

  private slugs: string[] = [];

  constructor() {
    this.setup();
  }

  async getSlugs() {
    await this.ready();
    return this.slugs;
  }

  async getTags() {
    await this.ready();

    const tags: Tag[] = [];

    this.articles.forEach((article) => {
      article.tags.forEach((tag) => {
        const existingTag = tags.find((t) => t.name === tag);

        if (existingTag) {
          existingTag.count++;
        } else {
          tags.push({ name: tag, count: 1 });
        }
      });
    }, []);

    return tags;
  }

  async getArticles() {
    await this.ready();
    return this.articles;
  }

  async getArticle(slug: string) {
    await this.ready();
    return this.articles.find((article) => article.slug === slug);
  }

  async getArticlesByTag(tag: string) {
    await this.ready();
    return this.articles.filter((article) => article.tags.includes(tag));
  }

  private async ready() {
    await this.setup();
    return true;
  }

  private async setup() {
    if (this.setupPromise) {
      return this.setupPromise;
    }

    this.setupPromise = new Promise(async (resolve, reject) => {
      try {
        const fileNames = await fs.readdir(ARTICLES_DIRECTORY);

        this.slugs = fileNames.map((fileName) => {
          return fileName.substring(0, fileName.lastIndexOf('.'));
        });

        this.articles = await Promise.all(
          fileNames.map(async (fileName) => {
            const filePath = path.join(ARTICLES_DIRECTORY, fileName);

            const fileContents = await fs.readFile(filePath);

            const { content, data } = matter(fileContents);

            const parsedData = articleSchema.parse(data);

            return {
              content,
              ...parsedData,
              slug: fileName.substring(0, fileName.lastIndexOf('.')),
            };
          }),
        ).then((articles) => {
          const currentDate = new Date().getTime();

          // Filter out articles that are not published yet
          return articles.filter((article) => {
            const articleDate = new Date(article.date).getTime();
            return articleDate <= currentDate;
          });
        });
      } catch (e) {
        reject(e);
      }

      resolve();
    });
  }
}

export const articleRepository = new ArticleRepository();
