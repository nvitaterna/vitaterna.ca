import { GetStaticProps, NextPageWithLayout } from 'next';

import { ArticleListItem } from '@/components/article-list-item';
import BaseLayout from '@/components/base-layout';
import { ArticleItem, getArticles } from '@/lib/mdx/article';

interface BlogPageProps {
  articles: ArticleItem[];
}

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ articles }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleListItem article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

BlogPage.getLayout = (component) => {
  return <BaseLayout>{component}</BaseLayout>;
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
};

export default BlogPage;
