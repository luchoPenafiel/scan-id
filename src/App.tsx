// Vendors
import { useState, useCallback } from 'react';

// Views
import { IdentityView, ScanView } from './views';

// Styles
import { GlobalStyles } from './GlobalStyes';

const App = () => {
  const [showScanView, setShowScanView] = useState(false);
  const [image, setImage] = useState<string>('');
  const [isAccepted, setIsAccepted] = useState(false);

  const handleTakePicture = () => {
    setShowScanView(true);
  };

  const handleCancel = () => {
    setShowScanView(false);
  };

  const handleChangeStatus = (newStatus: boolean) => {
    setIsAccepted(newStatus);
  };

  const handleSetImage = useCallback((image) => {
    setImage(image);
  }, []);

  return (
    <>
      <GlobalStyles />
      {showScanView ? (
        <ScanView
          onSaveImage={handleSetImage}
          onChangeStatus={handleChangeStatus}
          onCancel={handleCancel}
        />
      ) : (
        <IdentityView
          image={image}
          status={isAccepted}
          onTakePicture={handleTakePicture}
        />
      )}
    </>
  );
};

export default App;
