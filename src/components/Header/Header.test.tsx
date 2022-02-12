// Vendors
import { render, screen } from '@testing-library/react';

// Components
import { Header } from './Header';

test('should render Header component', () => {
  render(<Header />);

  const HeaderComponent = screen.queryByTestId('header');

  expect(HeaderComponent).toBeTruthy();
});
