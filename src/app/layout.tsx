import { PropsWithChildren } from 'react';

import Navigation from '@/app/navigation';
import { Providers } from '@/app/providers';

import '../globals.css';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body
        className="light:bg-white dark:bg-gray-900"
        suppressHydrationWarning
      >
        <Providers>
          <div className="prose dark:prose-invert md:container md:mx-auto transition-colors ease-in-out motion-reduce:transition-none mt-12 px-8 sm:px-12">
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
    template: '%s | vitaterna.ca',
  },
};

export default RootLayout;
