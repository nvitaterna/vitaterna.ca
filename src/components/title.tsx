import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface TitleProps {
  title?: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  let titleString = 'vitaterna.ca';
  if (title) {
    titleString = `${title} | ${titleString}`;
  }
  return (
    <Head>
      <title>{titleString}</title>
    </Head>
  );
};
