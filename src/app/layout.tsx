import { PropsWithChildren } from 'react';

import Navigation from '@/app/navigation';
import { Providers } from '@/app/providers';

import '../globals.css';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body
        className="light:bg-white dark:bg-gray-900"
        suppressHydrationWarning
      >
        <Providers>
          <div className="prose dark:prose-invert md:container md:mx-auto ease-in-out mt-12 px-8 sm:px-12">
            <Navigation />
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
};

export const metadata = {
  title: {
    absolute: 'vitaterna.ca',
    template: '%s | vitaterna.ca',
  },
};

export default RootLayout;
