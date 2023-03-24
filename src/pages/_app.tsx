import { MDXProvider } from '@mdx-js/react';
import { NextComponentType, NextPageContext, NextPageWithLayout } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import components from '@/lib/mdx/components';
import { setupStore } from '@/store/store';

import '../globals.css';

export type MyAppProps = AppProps & {
  Component: NextPageWithLayout & NextComponentType<NextPageContext, any, any>;
};

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout || ((page) => page);

  const store = setupStore();

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <MDXProvider components={components}>
          {getLayout(<Component {...pageProps} />)}
        </MDXProvider>
      </ThemeProvider>
    </Provider>
  );
}
