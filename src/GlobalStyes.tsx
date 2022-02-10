// Vendor
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #2F0079;
    --white: #fff;
    --black: #000;

    --borderGray: rgba(47,0,121,0.1);
    --borderRadius: 0.75rem;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    font-family: 'Poppins';
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 16px;
  }

  h2 {
    margin-bottom: 1rem;

    color: var(--black);
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5rem;
  }
`;
