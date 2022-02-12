// Vendors
import { render, screen } from '@testing-library/react';

// Components
import { IdentityView } from './IdentityView';

test('should render IdentityView component', () => {
  render(<IdentityView image="" status={true} onTakePicture={() => {}} />);

  const IdentityViewComponent = screen.queryByTestId('identity-view');

  expect(IdentityViewComponent).toBeTruthy();
});

test('should render a title in IdentityView component', () => {
  render(<IdentityView image="" status={true} onTakePicture={() => {}} />);

  const Title = screen.queryByTestId('title');

  expect(Title).toBeTruthy();
});

test('should render a description in IdentityView component', () => {
  render(<IdentityView image="" status={true} onTakePicture={() => {}} />);

  const Descriptions = screen.queryByTestId('description');

  expect(Descriptions).toBeTruthy();
});

test('should render a placeholder image in IdentityView component', () => {
  render(<IdentityView image="" status={true} onTakePicture={() => {}} />);

  const Placeholder = screen.queryByTestId('placeholder-image');

  expect(Placeholder).toBeTruthy();
});

test('should render a taken image in IdentityView component', () => {
  render(
    <IdentityView
      image="/some-url.jpg"
      status={true}
      onTakePicture={() => {}}
    />
  );

  const TakenImage = screen.queryByTestId('taken-image');

  expect(TakenImage).toBeTruthy();
});

test('should render a rejected image in IdentityView component', () => {
  render(
    <IdentityView
      image="/some-url.jpg"
      status={false}
      onTakePicture={() => {}}
    />
  );

  const RetakeButton = screen.queryByTestId('retake-picture-button');
  const RejectedIcon = screen.queryByTestId('rejected-icon');

  expect(RetakeButton).toBeTruthy();
  expect(RejectedIcon).toBeTruthy();
});

test('should render a accepted image in IdentityView component', () => {
  render(
    <IdentityView
      image="/some-url.jpg"
      status={true}
      onTakePicture={() => {}}
    />
  );

  const RetakeButton = screen.queryByTestId('retake-picture-button');
  const AcceptedIcon = screen.queryByTestId('accepted-icon');

  expect(RetakeButton).toBeFalsy();
  expect(AcceptedIcon).toBeTruthy();
});
