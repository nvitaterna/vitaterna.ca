import { useTheme } from 'next-themes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export const PrettyCodeDiv: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => {
  const { theme } = useTheme();

  if (props['data-theme'] && props['data-theme'] !== theme) {
    return null;
  }
  if (props['data-rehype-pretty-code-fragment'] !== undefined) {
    return <div {...(props as any)}>{children}</div>;
  }
  if (props['data-rehype-pretty-code-title'] !== undefined) {
    return <code {...props}>{children}</code>;
  }
  return <div {...props}>{children}</div>;
};

export const PrettyCodeCode: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ children, ...props }) => {
  const { theme } = useTheme();

  if (props['data-theme'] && props['data-theme'] !== theme) {
    return null;
  }
  return <code {...props}>{children}</code>;
};
