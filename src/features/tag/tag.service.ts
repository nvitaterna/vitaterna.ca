import { ArticleService, articleService } from '../article/article.service';

export class TagService {
  constructor(private articleService: ArticleService) {}

  async getTags() {
    return this.articleService.getTags().then((tags) => {
      return tags.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    });
  }

  async getTag(tagName: string) {
    return (await this.articleService.getTags()).find(
      (tag) => tag.name === tagName,
    );
  }
}

export const tagService = new TagService(articleService);
