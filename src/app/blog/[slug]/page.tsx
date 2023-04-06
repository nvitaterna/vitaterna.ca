import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { FormattedDate } from '@/components/formatted-date';
import { TagsList } from '@/components/tags-list';
import { articleService } from '@/features/article/article.service';
import components from '@/features/mdx/components';
import remoteOptions from '@/features/mdx/remote-options';
import { slugService } from '@/features/slug/slug.service';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params: { slug } }: BlogPostPageProps) => {
  if (!slug) {
    throw new Error('how');
  }

  const article = await articleService.getArticle(slug);

  if (!article) {
    throw new Error();
  }

  return (
    <>
      <header>
        <h1>{article.title}</h1>
        <p>
          <FormattedDate date={article.date} />
          &nbsp;-&nbsp;
          <TagsList tags={article.tags} />
        </p>
        <hr />
      </header>
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={article.content}
        components={components}
        options={remoteOptions}
      />
    </>
  );
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const slugs = await slugService.getSlugs();

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const { slug } = params;

  const article = await articleService.getArticle(slug);

  if (!article) {
    throw new Error(
      `Could not find article with slug "${slug}" for metadata generation`,
    );
  }

  return {
    title: article.title,
    description: article.description,
  };
};

export default BlogPostPage;
