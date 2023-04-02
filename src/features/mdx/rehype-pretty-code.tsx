import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';

export const PrettyCodeDiv: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  if (props['data-rehype-pretty-code-fragment'] !== undefined) {
    return (
      <div
        className={classNames(className, 'bg-gray-100 dark:bg-gray-800 p-4')}
        {...props}
      >
        {children}
      </div>
    );
  }
  return (
    <div {...props} className={className} data-test="true">
      {children}
    </div>
  );
};
