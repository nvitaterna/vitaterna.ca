import Link from 'next/link';

interface TagsListProps {
  tags: string[];
}

export const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, i) => (
        <span key={tag}>
          <Link className="font-normal" href={`/blog/tags/${tag}`}>
            {tag}
          </Link>
          {i < tags.length - 1 && <span>, </span>}
        </span>
      ))}
    </>
  );
};
