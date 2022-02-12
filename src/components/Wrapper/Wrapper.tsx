// Vendors
import { ReactElement } from 'react';

// Styles
import { WrapperStyles } from './Wrapper.styles';

export const Wrapper = ({
  children,
  testid,
}: {
  children: ReactElement | ReactElement[];
  testid: string;
}) => {
  return (
    <WrapperStyles data-testid={testid}>
      <div>{children}</div>
    </WrapperStyles>
  );
};
