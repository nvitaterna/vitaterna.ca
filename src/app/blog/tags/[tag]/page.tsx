import { ArticleListItem } from '@/components/article-list-item';
import { articleService } from '@/features/article/article.service';
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
      <h1>{tag}</h1>
      <hr />
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

export const generateMetadata = async ({ params }: BlogTagPageProps) => {
  return {
    title: params.tag,
  };
};

export default BlogTagPage;
