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
    
  @font-face {
    font-family: 'Roboto Bold Italic';
    src: url('./fonts/Roboto-BoldItalic.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto Bold';
    src: url('./fonts/Roboto-Bold.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Regular.woff2') format('woff2');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    color: var(--black);
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 16px;
  }

  p {
    text-align: center;
  }

  h1 {
    font-family: 'Roboto Bold Italic'
  }

  h2 {
    margin-bottom: 1rem;

    font-family: 'Roboto Bold';
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.5rem;
  }
`;
