import { ArticleRepository, articleRepository } from './article.repository';

export class ArticleService {
  constructor(private articleRepository: ArticleRepository) {}

  async getSlugs() {
    return this.articleRepository.getSlugs();
  }

  async getTags() {
    return this.articleRepository.getTags();
  }

  async getArticles() {
    return this.articleRepository.getArticles().then((articles) => {
      return articles.map((article) => {
        const { content, ...rest } = article;

        return rest;
      });
    });
  }

  async getArticlesWithContent() {
    return this.articleRepository.getArticles();
  }

  async getArticle(slug: string) {
    return this.articleRepository.getArticle(slug);
  }

  async getArticlesByTag(tag: string) {
    return this.articleRepository.getArticlesByTag(tag);
  }
}

export const articleService = new ArticleService(articleRepository);
