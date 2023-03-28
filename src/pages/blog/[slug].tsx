import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import BaseLayout from '@/components/base-layout';
import { FormattedDate } from '@/components/formatted-date';
import { useIsClient } from '@/hooks/use-is-client';
import { getArticle, getSlugs, ArticleItem } from '@/lib/mdx/article';
import remoteOptions from '@/lib/mdx/remote-options';

interface BlogPostPageProps {
  post: string;
  source: MDXRemoteSerializeResult<never, never>;
  frontMatter: ArticleItem;
}

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({
  source,
  frontMatter,
}) => {
  return (
    <>
      <Head>
        {/* title */}
        <title>{frontMatter.title}</title>
      </Head>
      <header className="mt-32">
        <h1 className="text-5xl mb-1 font-semibold">{frontMatter.title}</h1>
        <FormattedDate date={frontMatter.date} />
        <p className="mt-0">{frontMatter.tags.join(', ')}</p>
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
  const slugs = await getSlugs();
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

  const source = await getArticle(slug);
  const mdxSource = await serialize<never, never>(
    source.content,
    remoteOptions,
  );

  return {
    props: {
      post: params?.slug || '',
      source: mdxSource,
      frontMatter: source.frontMatter,
    },
  };
};
