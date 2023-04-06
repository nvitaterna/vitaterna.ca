'use client';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';

import components from '@/features/mdx/components';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  );
};
