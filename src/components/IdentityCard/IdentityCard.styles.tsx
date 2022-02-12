// Vendors
import styled from 'styled-components';

export const IdentityCardWrapper = styled.div`
  height: 160px;
  width: 260px;

  margin-top: 1.75rem;
  margin-right: auto;
  margin-left: auto;

  border-radius: var(--borderRadius);
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  background-color: var(--white);
`;

export const IdentityCard = styled.div<{ image: string; status: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  border-radius: var(--borderRadius);
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;

  object-fit: cover;
  border: 2px solid ${({ status }) => (status ? 'var(--green)' : 'var(--red)')};
`;

export const EmptyCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 1rem;

  background-image: url('./images/id-placeholder.svg');
  background-position: center;
  background-repeat: no-repeat;
`;

export const Pill = styled.span<{ status: boolean }>`
  display: flex;
  align-items: center;

  position: absolute;
  bottom: -16px;
  right: 20px;

  padding-right: 0.5rem;

  color: var(--white);
  text-transform: uppercase;
  font-family: 'Roboto Bold';
  font-size: 0.75rem;

  border-radius: 4px;
  background-color: ${({ status }) => (status ? 'var(--green)' : 'var(--red)')};
`;
