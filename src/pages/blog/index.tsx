import { GetStaticProps, NextPageWithLayout } from 'next';

import { ArticleListItem } from '@/components/article-list-item';
import BaseLayout from '@/components/base-layout';
import { Title } from '@/components/title';

import { ArticleItem } from '../../features/article/article.schema';
import { articleService } from '../../features/article/article.service';

interface BlogPageProps {
  articles: ArticleItem[];
}

const BlogPage: NextPageWithLayout<BlogPageProps> = ({ articles }) => {
  return (
    <>
      <Title title="Blog" />
      <div>
        <h1>Blog</h1>
        <hr className="mt-0" />
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <ArticleListItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

BlogPage.getLayout = (component) => {
  return <BaseLayout>{component}</BaseLayout>;
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const articles = await articleService.getArticles();

  return {
    props: {
      articles,
    },
  };
};

export default BlogPage;
