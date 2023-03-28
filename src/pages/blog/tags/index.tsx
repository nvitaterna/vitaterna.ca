import { ParsedUrlQuery } from 'querystring';

import { NextPageWithLayout, GetStaticProps } from 'next';
import Link from 'next/link';

import BaseLayout from '@/components/base-layout';
import { getTags, Tag } from '@/lib/mdx/tag';

interface TagsPageProps {
  tags: Tag[];
}
const TagsPage: NextPageWithLayout<TagsPageProps> = ({ tags }) => {
  return (
    <>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>
            <Link href={`/blog/tags/${tag.name}`}>
              {tag.name} ({tag.count})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TagsPage.getLayout = (component) => {
  return <BaseLayout>{component}</BaseLayout>;
};

export default TagsPage;

interface QParams extends ParsedUrlQuery {
  tag: string;
}

export const getStaticProps: GetStaticProps<
  TagsPageProps,
  QParams
> = async () => {
  const tags = (await getTags()).sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      tags,
    },
  };
};
