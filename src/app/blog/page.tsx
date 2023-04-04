import { GetStaticProps, NextPageWithLayout } from 'next';
import { FC } from 'react';

import { ArticleListItem } from '@/components/article-list-item';
import { Title } from '@/components/title';

import { ArticleItem } from '../../features/article/article.schema';
import { articleService } from '../../features/article/article.service';

interface BlogPageProps {
  articles: ArticleItem[];
}

const BlogPage = async () => {
  const articles = await articleService.getArticles();

  return (
    <>
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

export const metadata = {
  title: 'Blog',
};

export default BlogPage;
