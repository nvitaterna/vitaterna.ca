import classNames from 'classnames';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

export const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className={classNames(props.className, 'text-xs rounded-full px-1 py-1')}
      {...props}
    >
      {children}
    </button>
  );
};
