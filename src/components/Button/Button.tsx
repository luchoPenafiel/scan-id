// Vendors
import React from 'react';

// Styles
import { StyledButton } from './Button.styles';

type ButtoType = {
  children: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  testid: string;
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  testid,
}: ButtoType) => {
  return (
    <StyledButton
      data-testid={`${testid}-button`}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};
