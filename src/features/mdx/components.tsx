import { Components, MergeComponents } from '@mdx-js/react/lib';
import Image from 'next/image';

import { PrettyCodeDiv } from './rehype-pretty-code';

const components: Components | MergeComponents | null | undefined = {
  div: PrettyCodeDiv,
  Image,
};

export default components;
