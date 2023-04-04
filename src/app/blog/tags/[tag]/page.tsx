import { ArticleListItem } from '@/components/article-list-item';
import { Title } from '@/components/title';
import { articleService } from '@/features/article/article.service';
import { Tag } from '@/features/tag/tag.schema';
import { tagService } from '@/features/tag/tag.service';

interface BlogTagPageProps {
  params: {
    tag: string;
  };
}

const BlogTagPage = async ({ params: { tag } }: BlogTagPageProps) => {
  const articles = await articleService.getArticlesByTag(tag);

  return (
    <>
      <Title title={tag} />
      <h1>{tag}</h1>
      <hr className="mt-0" />
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleListItem article={article} />
          </li>
        ))}
      </ul>
    </>
  );
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const tags = await tagService.getTags();

  return tags.map((tag) => ({ tag: tag.name }));
};

export default BlogTagPage;
