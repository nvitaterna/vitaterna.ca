import Link from 'next/link';

import { ArticleItem } from '@/features/article/article.schema';

import { FormattedDate } from './formatted-date';
import { TagsList } from './tags-list';

interface ArticleListItemProps {
  article: ArticleItem;
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({
  article,
}) => {
  return (
    <div>
      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      <br />
      <FormattedDate date={article.date} /> - <TagsList tags={article.tags} />
    </div>
  );
};
