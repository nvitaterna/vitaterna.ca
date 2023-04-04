'use client';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import components from '@/features/mdx/components';
import { setupStore } from '@/store/store';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const store = setupStore();
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Provider>
    </ThemeProvider>
  );
};
