import Link from 'next/link';

import { tagService } from '@/features/tag/tag.service';

const TagsPage = async () => {
  const tags = await tagService.getTags();

  return (
    <>
      <h1>Tags</h1>
      <hr className="mt-0" />
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
};

export default TagsPage;
