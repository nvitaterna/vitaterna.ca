import type { SerializeOptions } from 'next-mdx-remote/dist/types';
import rehypeAutolinkHeadings, {
  Options as RehypeAutolinkHeadingsOptions,
} from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const remoteOptions: SerializeOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { className: ['anchor'] },
          behaviour: 'wrap',
        } as Partial<RehypeAutolinkHeadingsOptions>,
      ],
      rehypeCodeTitles,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'one-dark-pro',
            light: 'min-light',
          },
          keepBackground: false,
        } as Partial<RehypePrettyCodeOptions>,
      ],
    ],
  },
};

export default remoteOptions;
