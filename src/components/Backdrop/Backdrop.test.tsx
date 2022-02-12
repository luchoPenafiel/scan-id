// Vendors
import { render, screen } from '@testing-library/react';

// Components
import { Backdrop } from './Backdrop';

test('should render title in Backdrop component', () => {
  render(<Backdrop result="Approved" imageTaken="" onCancel={() => {}} />);

  const Title = screen.queryByTestId('title');

  expect(Title).toBeTruthy();
});

test('should render descriptions in Backdrop component', () => {
  render(<Backdrop result="Approved" imageTaken="" onCancel={() => {}} />);

  const Description = screen.queryAllByTestId('description');

  expect(Description.length).toBe(2);
});

test('should render approved icon in Backdrop component', () => {
  render(<Backdrop result="Approved" imageTaken="" onCancel={() => {}} />);

  const ApprovedIcon = screen.queryAllByTestId('approved');

  expect(ApprovedIcon.length).toBeTruthy();
});

test('should render rejected icon in Backdrop component', () => {
  render(<Backdrop result="Rejected" imageTaken="" onCancel={() => {}} />);

  const RejectedIcon = screen.queryAllByTestId('rejected');

  expect(RejectedIcon.length).toBeTruthy();
});
