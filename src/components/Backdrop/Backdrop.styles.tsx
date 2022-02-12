import styled from 'styled-components';

export const Top = styled.div`
  margin-top: 6rem;
  margin-bottom: 3.75rem;

  h2,
  p {
    color: var(--white);
  }
`;

export const Bottom = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 1rem;
    margin-bottom: 7rem;

    color: var(--white);
  }

  button {
    display: block;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const Camera = styled.div<{
  result: 'Approved' | 'Rejected';
  imageTaken: boolean;
}>`
  width: 18rem;
  height: 11rem;

  margin-left: auto;
  margin-right: auto;

  border-radius: 18px;
  border: 2px solid
    ${({ result, imageTaken }) =>
      imageTaken
        ? result === 'Approved'
          ? 'var(--green)'
          : 'var(--red)'
        : 'transparent'};

  box-shadow: 0px 0px 0px 800px rgba(20, 28, 38, 0.75);
`;
