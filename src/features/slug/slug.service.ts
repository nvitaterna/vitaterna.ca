import { ArticleService, articleService } from '../article/article.service';

export class SlugService {
  constructor(private articleService: ArticleService) {}

  async getSlugs() {
    return this.articleService.getSlugs();
  }
}

export const slugService = new SlugService(articleService);
