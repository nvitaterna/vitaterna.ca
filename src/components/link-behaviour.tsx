import NextLink, { LinkProps } from 'next/link'
import { forwardRef, Ref } from "react";

export const LinkBehaviour = forwardRef(function LinkBehaviour(props: LinkProps, ref?: Ref<HTMLAnchorElement> | undefined) {
  return <NextLink ref={ref} {...props} />;
});
