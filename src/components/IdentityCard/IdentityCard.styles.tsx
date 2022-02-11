// Vendors
import styled from 'styled-components';

export const IdentityCardWrapper = styled.div`
  height: 180px;
  width: 290px;

  margin-top: 1.75rem;
  margin-right: auto;
  margin-left: auto;

  border-radius: 12px;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  background-color: var(--white);

  overflow: hidden;
`;

export const IdentityCard = styled.img`
  width: 290px;
  height: 180px;

  object-fit: cover;
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
