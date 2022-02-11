// Vendors
import styled from 'styled-components';

export const IdentityCard = styled.div<{ image?: string }>`
  height: 160px;
  width: 260px;

  margin-top: 1.75rem;
  margin-right: auto;
  margin-left: auto;

  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  background-color: var(--white);

  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-repeat: no-repeat;
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
