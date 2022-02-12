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
  Pill,
} from '../../components';

type IdentityViewTypes = {
  image?: string;
  status: boolean;
  onTakePicture: () => void;
};

export const IdentityView = ({
  image,
  status,
  onTakePicture,
}: IdentityViewTypes) => {
  const handleTakePicture = () => {
    onTakePicture();
  };

  return (
    <>
      <Header />
      <Wrapper testid="identity-view">
        <h2 data-testid="title">Scan your ID</h2>
        <p data-testid="description">
          Take a picture. It may take time to validate your personal
          information.
        </p>
        {image ? (
          <IdentityCardWrapper data-testid="taken-image">
            <IdentityCard image={image} status={status}>
              {!status && (
                <Button onClick={handleTakePicture} testid="retake-picture">
                  Retake picture
                </Button>
              )}
              <Pill status={status}>
                {status ? (
                  <>
                    <img
                      src={'./icons/check.svg'}
                      alt="Check icon"
                      data-testid="accepted-icon"
                    />
                    Accepted
                  </>
                ) : (
                  <>
                    <img
                      src={'./icons/rejected.svg'}
                      alt="Check icon"
                      data-testid="rejected-icon"
                    />
                    Rejected
                  </>
                )}
              </Pill>
            </IdentityCard>
          </IdentityCardWrapper>
        ) : (
          <IdentityCardWrapper data-testid="placeholder-image">
            <EmptyCard>
              <Button onClick={handleTakePicture} testid="take-picture">
                Take picture
              </Button>
            </EmptyCard>
          </IdentityCardWrapper>
        )}
      </Wrapper>
    </>
  );
};
