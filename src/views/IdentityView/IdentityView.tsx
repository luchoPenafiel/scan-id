// Vendors
import React from 'react';

// Components
import {
  Button,
  Header,
  Wrapper,
  IdentityCard,
  IdentityCardWrapper,
  EmptyCard,
} from '../../components';

type IdentityViewTypes = {
  image?: string;
  onTakePicture: () => void;
};

export const IdentityView = ({ image, onTakePicture }: IdentityViewTypes) => {
  const handleTakePicture = () => {
    onTakePicture();
  };

  return (
    <>
      <Header />
      <Wrapper>
        <h2>Scan your ID</h2>
        <p>
          Take a picture. It may take time to validate your personal
          information.
        </p>
        {image ? (
          <IdentityCardWrapper>
            <IdentityCard src={image} />
            <Button onClick={handleTakePicture}>Retake picture</Button>
          </IdentityCardWrapper>
        ) : (
          <IdentityCardWrapper>
            <EmptyCard>
              <Button onClick={handleTakePicture}>Take picture</Button>
            </EmptyCard>
          </IdentityCardWrapper>
        )}
      </Wrapper>
    </>
  );
};
