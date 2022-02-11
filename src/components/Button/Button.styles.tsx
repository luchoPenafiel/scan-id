// Vendors
import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.25rem;

  color: var(--white);
  font-size: 1rem;
  font-family: 'Roboto Bold';
  text-transform: uppercase;

  border-radius: 1.5rem;
  background-color: ${({ variant }) =>
    variant === 'secondary' ? 'transparent' : 'var(--blue)'};
  border: none;

  cursor: pointer;

  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.15);
  }
`;
