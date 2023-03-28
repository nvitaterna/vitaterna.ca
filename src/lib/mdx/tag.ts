import { getArticles } from './article';

export interface Tag {
  name: string;
  count: number;
}

export const getTags = async (): Promise<Tag[]> => {
  const articles = await getArticles();
  const tags: Tag[] = [];

  articles.forEach((article) => {
    article.tags.forEach((tag) => {
      const existingTag = tags.find((t) => t.name === tag);
      if (existingTag) {
        existingTag.count++;
      } else {
        tags.push({
          name: tag,
          count: 1,
        });
      }
    });
  });

  return tags;
};

export const getTag = async (name: string) => {
  const tags = await getTags();
  return tags.find((tag) => tag.name === name);
};
