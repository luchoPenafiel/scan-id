// Vendors
import React from 'react';

// Views
import { IdentityView } from './views/IdentityView/IdentityView';

// Styles
import { GlobalStyles } from './GlobalStyes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <IdentityView />
    </>
  );
};

export default App;
