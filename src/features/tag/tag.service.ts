import { ArticleService, articleService } from '../article/article.service';

export class TagService {
  constructor(private articleService: ArticleService) {}

  async getTags() {
    return this.articleService.getTags();
  }

  async getTag(tagName: string) {
    return (await this.articleService.getTags()).find(
      (tag) => tag.name === tagName,
    );
  }
}

export const tagService = new TagService(articleService);
