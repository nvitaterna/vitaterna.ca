import { PropsWithChildren } from 'react';

import Navigation from '../app/navigation';

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="prose dark:prose-invert md:container md:mx-auto transition-colors ease-in-out motion-reduce:transition-none mt-12 px-8 sm:px-12">
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
