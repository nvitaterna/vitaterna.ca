import fs from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';
import { infer, z } from 'zod';

const POSTS_DIRECTORY = path.resolve(process.cwd(), 'src/posts');

const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string(),
  tags: z.array(z.string()),
});

interface PostItem extends infer<typeof postSchema> {
  slug: string;
}

interface Post {
  content: string;
  frontMatter: PostItem;
}

const loadPost = async (slug: string) => {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);

  const source = await fs.readFile(filePath);

  const { content, data } = matter(source);

  const parsedData = postSchema.parse(data);

  return {
    parsedData,
    content,
  };
};

export const getSlugs = async () => {
  const slugs = await (
    await fs.readdir(POSTS_DIRECTORY)
  ).map((fileName) => {
    return fileName.replace('.mdx', '');
  });

  return slugs;
};

export const getPosts = async () => {
  const slugs = await getSlugs();

  const posts: PostItem[] = await Promise.all(
    slugs.map(async (slug) => {
      const { parsedData } = await loadPost(slug);

      const post: PostItem = {
        ...parsedData,
        slug,
      };

      return post;
    }),
  );

  return posts;
};

export const getPost = async (slug: string) => {
  const { parsedData, content } = await loadPost(slug);

  const post: Post = {
    content,
    frontMatter: {
      ...parsedData,
      slug,
    },
  };

  return post;
};
