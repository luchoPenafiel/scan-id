// Vendors
import React from 'react';

// Styles
import { StyledButton } from './Button.styles';

type ButtoType = {
  children: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
}: ButtoType) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
