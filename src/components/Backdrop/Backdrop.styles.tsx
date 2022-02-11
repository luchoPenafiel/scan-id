import styled from 'styled-components';

export const BackdropStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: calc((100vh - 160px) / 2);

  background: rgba(0, 0, 0, 0.7);

  h2,
  p {
    color: var(--white);
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: calc((100vh - 160px) / 2);

  padding: 1rem 1rem 3rem 1rem;

  background: rgba(0, 0, 0, 0.7);

  h2,
  p {
    color: var(--white);
  }
`;

export const X = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: calc((100vw - 260px) / 2);
  height: 160px;
`;

export const Camera = styled.div<{ result: boolean; imageTaken: boolean }>`
  border: 2px solid
    ${({ result, imageTaken }) =>
      imageTaken ? (result ? 'green' : 'red') : 'transparent'};
  width: 260px;
  height: 160px;
`;
