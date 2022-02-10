// Vendors
import React from 'react';

// Components
import { Header, IdentityCard, Wrapper } from '../../components';

export const IdentityView = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <h2>Scan your ID</h2>
        <p>
          Take a picture. It may take time to validate your personal
          information.
        </p>
        <IdentityCard />
      </Wrapper>
    </>
  );
};
