// Vendors
import { ReactElement } from 'react';

// Styles
import { WrapperStyles } from './Wrapper.styles';

export const Wrapper = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <WrapperStyles>
      <div>{children}</div>
    </WrapperStyles>
  );
};
