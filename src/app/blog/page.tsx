import { ArticleListItem } from '@/components/article-list-item';

import { articleService } from '../../features/article/article.service';

const BlogPage = async () => {
  const articles = await articleService.getArticles();

  return (
    <>
      <div>
        <h1>Blog</h1>
        <hr />
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
  description: 'Blog page with article list.',
};

export default BlogPage;
