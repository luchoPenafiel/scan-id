// Vendors
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import App from './App';

test('should render Identity View', () => {
  render(<App />);
  const IdentityView = screen.queryByTestId('identity-view');
  const ScanView = screen.queryByTestId('scan-view');

  expect(IdentityView).toBeTruthy();
  expect(ScanView).toBeFalsy();
});

test('should render Scan View', () => {
  render(<App />);

  const TakePictureButton = screen.queryByTestId('take-picture-button');

  expect(TakePictureButton).toBeTruthy();
  if (TakePictureButton) fireEvent.click(TakePictureButton);

  const IdentityView = screen.queryByTestId('identity-view');
  const ScanView = screen.queryByTestId('scan-view');

  expect(ScanView).toBeTruthy();
  expect(IdentityView).toBeFalsy();
});
