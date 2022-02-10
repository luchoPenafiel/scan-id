// Vendors
import React from 'react';

// Components
import { Header, IDPlaceholder, Wrapper } from './components';

// Styles
import { GlobalStyles } from './GlobalStyes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <h2>Scan your ID</h2>
        <p>
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <IDPlaceholder />
      </Wrapper>
    </>
  );
};

export default App;
