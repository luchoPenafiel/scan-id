// Vendors
import { useState, useCallback } from 'react';

// Views
import { IdentityView, ScanView } from './views';

// Styles
import { GlobalStyles } from './GlobalStyes';

const App = () => {
  const [showScanView, setShowScanView] = useState(false);
  const [image, setImage] = useState<string>('');

  const handleTakePicture = () => {
    setShowScanView(true);
  };

  const handleCancel = () => {
    setShowScanView(false);
  };

  const handleSetImage = useCallback((image) => {
    setImage(image);
  }, []);

  return (
    <>
      <GlobalStyles />
      {showScanView ? (
        <ScanView onSaveImage={handleSetImage} onCancel={handleCancel} />
      ) : (
        <IdentityView image={image} onTakePicture={handleTakePicture} />
      )}
    </>
  );
};

export default App;
