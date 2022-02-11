// Components
import { Button } from '../Button/Button';

// Styles
import { Top, Bottom, Camera } from './Backdrop.styles';

export const Backdrop = ({
  onCancel,
  result,
  imageTaken,
}: {
  result: boolean;
  imageTaken: string;
  onCancel: () => void;
}) => {
  return (
    <>
      <Top>
        <h2>Take picture</h2>
        <p>Fit your ID card inside the frame.</p>
        <p>The picture will be taken automatically.</p>
      </Top>
      <Camera result={result} imageTaken={!!imageTaken} />

      <Bottom>
        <p>
          {result ? (
            <>
              <img src={'./icons/check.svg'} alt="Check icon" /> Picture taken!
            </>
          ) : (
            <>
              <img src={'./icons/bulb.svg'} alt="Bulb icon" />
              Room lighting is too low
            </>
          )}
        </p>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </Bottom>
    </>
  );
};
