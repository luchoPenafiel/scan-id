// Vendors
import React from 'react';

// Styles
import { StyledButton } from './Button.styles';

export const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
