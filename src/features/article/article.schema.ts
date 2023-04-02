import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string(),
  date: z.preprocess((val) => z.date().parse(val).toString(), z.string()),
  description: z.string(),
  tags: z.array(z.string()),
});

export interface ArticleItem extends z.infer<typeof articleSchema> {
  slug: string;
}

export interface Article extends ArticleItem {
  content: string;
}
