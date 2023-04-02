import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import BaseLayout from '@/components/base-layout';
import { FormattedDate } from '@/components/formatted-date';
import { TagsList } from '@/components/tags-list';
import { Title } from '@/components/title';

import { ArticleItem } from '../../features/article/article.schema';
import { articleService } from '../../features/article/article.service';
import remoteOptions from '../../features/mdx/remote-options';
import { slugService } from '../../features/slug/slug.service';

interface BlogPostPageProps {
  post: string;
  source: MDXRemoteSerializeResult<never, never>;
  articleData: ArticleItem;
}

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({
  source,
  articleData: frontMatter,
}) => {
  return (
    <>
      <Title title={frontMatter.title} />
      <header className="mt-32">
        <h1 className="text-5xl mb-1 font-semibold">{frontMatter.title}</h1>
        <FormattedDate date={frontMatter.date} />
        <p className="mt-0">
          <TagsList tags={frontMatter.tags} />
        </p>
        <hr className="mt-0" />
      </header>
      <MDXRemote {...source} />
    </>
  );
};

BlogPostPage.getLayout = (component) => {
  return <BaseLayout>{component}</BaseLayout>;
};

export default BlogPostPage;

interface QParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  const slugs = await slugService.getSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  BlogPostPageProps,
  QParams
> = async ({ params }) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('how');
  }

  const article = await articleService.getArticle(slug);

  if (!article) {
    throw new Error();
  }

  const mdxSource = await serialize<never, never>(
    article.content,
    remoteOptions,
  );

  const { content, ...articleData } = article;

  return {
    props: {
      post: params?.slug || '',
      source: mdxSource,
      articleData,
    },
  };
};
