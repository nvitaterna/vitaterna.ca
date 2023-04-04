import { ResolvingMetadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { FormattedDate } from '@/components/formatted-date';
import { TagsList } from '@/components/tags-list';
import { Title } from '@/components/title';
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
      <header className="mt-32">
        <h1 className="text-5xl mb-1 font-semibold">{article.title}</h1>
        <FormattedDate date={article.date} />
        <p className="mt-0">
          <TagsList tags={article.tags} />
        </p>
        <hr className="mt-0" />
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

export const generateMetadata = async ({ params }: BlogPostPageProps) => {
  const { slug } = params;

  const article = await articleService.getArticle(slug);

  if (!article) {
    throw new Error(
      `Could not find article with slug "${slug}" for metadata generation`,
    );
  }

  return {
    title: article.title,
  };
};

export default BlogPostPage;
