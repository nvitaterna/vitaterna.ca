import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import BaseLayout from '@/components/base-layout';
import { getPost, getSlugs } from '@/lib/mdx/article';
import remoteOptions from '@/lib/mdx/remote-options';

interface BlogPostPageProps {
  post: string;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

const BlogPostPage: NextPageWithLayout<BlogPostPageProps> = ({ source }) => {
  return <MDXRemote {...source} />;
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

  const source = await getPost(slug);
  const mdxSource = await serialize(source.content, remoteOptions);

  return {
    props: {
      post: params?.slug || '',
      source: mdxSource,
    },
  };
};
