// Vendors
import { render, screen } from '@testing-library/react';

// Components
import { Wrapper } from './Wrapper';

test('should render Wrapper component', () => {
  render(
    <Wrapper testid="test-wrapper">
      <p>Test</p>
    </Wrapper>
  );

  const WrapperComponent = screen.queryByTestId('test-wrapper');

  expect(WrapperComponent).toBeTruthy();
});
