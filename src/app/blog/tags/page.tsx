import Link from 'next/link';

import { tagService } from '@/features/tag/tag.service';

const TagsPage = async () => {
  const tags = await tagService.getTags();

  return (
    <>
      <h1>Tags</h1>
      <hr />
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

export const metadata = {
  title: 'Tags',
  description: 'List of tags for this blog.',
};

export default TagsPage;
