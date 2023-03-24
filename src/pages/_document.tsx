import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="light:bg-white dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
