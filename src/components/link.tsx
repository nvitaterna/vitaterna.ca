import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

type LinkProps = Omit<GatsbyLinkProps<{}>, 'ref'>;

const Link: React.FunctionComponent<LinkProps> = ({ children, ...props }) => {
  const { to } = props;
  if (to.startsWith('/')) {
    // Use Gatsby's Link component for internal site navigation
    // to benefit from the preloading features
    // See: https://www.gatsbyjs.org/docs/gatsby-link/
    return <GatsbyLink {...props}>{children}</GatsbyLink>;
  }
  // Check if the link is for a section on the page
  // We don't want to add the attributes for the on page links
  const onPage = to.startsWith('#');
  return (
    <a
      href={to}
      // Open the link in a new page
      target={onPage ? undefined : '_blank'}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? undefined : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}

export default Link;