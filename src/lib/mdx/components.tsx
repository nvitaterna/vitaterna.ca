import { Components, MergeComponents } from '@mdx-js/react/lib';

import { PrettyCodeDiv } from './rehype-pretty-code';

const components: Components | MergeComponents | null | undefined = {
  div: PrettyCodeDiv,
};

export default components;
