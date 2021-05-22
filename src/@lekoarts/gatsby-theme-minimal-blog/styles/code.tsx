import code from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code';


code['p > code, li > code'] = {
  ...code['p > code, li > code'],
  bg: `muted`,
  color: `inherit`,
} as any;

code['.code-title'] = {
  ...code['.code-title'],
  bg: 'muted',
  color: 'inherit',
} as any;


export default code;