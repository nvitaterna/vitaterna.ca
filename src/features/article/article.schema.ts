import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string(),
  date: z.preprocess((val) => {
    const date = z.date().parse(val);
    date.setUTCHours(4);
    return date.toString();
  }, z.string()),
  description: z.string(),
  tags: z.array(z.string()),
});

export interface ArticleItem extends z.infer<typeof articleSchema> {
  slug: string;
}

export interface Article extends ArticleItem {
  content: string;
}
