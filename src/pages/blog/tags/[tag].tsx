import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import Link from 'next/link';

import { ArticleListItem } from '@/components/article-list-item';
import BaseLayout from '@/components/base-layout';
import { Title } from '@/components/title';
import { getArticles, ArticleItem } from '@/lib/mdx/article';
import { getTag, getTags, Tag } from '@/lib/mdx/tag';

interface BlogTagPageProps {
  tag: Tag;
  articles: ArticleItem[];
}

const BlogTagPage: NextPageWithLayout<BlogTagPageProps> = ({
  tag,
  articles: articles,
}) => {
  return (
    <>
      <Title title={tag.name} />
      <h1>{tag.name}</h1>
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

BlogTagPage.getLayout = (component) => {
  return <BaseLayout>{component}</BaseLayout>;
};

interface QParams extends ParsedUrlQuery {
  tag: string;
}

export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  const tags = await getTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        tag: tag.name,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  BlogTagPageProps,
  QParams
> = async ({ params }) => {
  const tagName = params?.tag;
  if (!tagName) {
    throw new Error('how tags?');
  }
  const tag = await getTag(tagName);

  if (!tag) {
    throw new Error('tag not found');
  }

  const articles = await getArticles();

  return {
    props: {
      tag,
      articles,
    },
  };
};

export default BlogTagPage;
