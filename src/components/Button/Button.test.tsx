// Vendors
import { render, screen } from '@testing-library/react';

// Components
import { Button } from './Button';

test('should render Button component', () => {
  render(
    <Button testid="test" variant="primary" onClick={() => {}}>
      Button
    </Button>
  );

  const TitleComponent = screen.queryByTestId('test-button');

  expect(TitleComponent).toBeTruthy();
});
