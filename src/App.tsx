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
        <IDPlaceholder />
      </Wrapper>
    </>
  );
};

export default App;
