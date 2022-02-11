// Components
import { Button } from '../Button/Button';

// Styles
import { BackdropStyled, Top, Bottom, X, Camera } from './Backdrop.styles';

export const Backdrop = ({
  onCancel,
  result,
  imageTaken,
}: {
  result: boolean;
  imageTaken: boolean;
  onCancel: () => void;
}) => {
  return (
    <BackdropStyled>
      <Top>
        <h2>Take picture</h2>
        <p>Fit your ID card inside the frame.</p>
        <p>The picture will be taken automatically.</p>
      </Top>
      <X />
      <Camera result={result} imageTaken={imageTaken} />
      <X />
      <Bottom>
        <p>
          {!imageTaken
            ? 'Room lighting is too low'
            : result
            ? 'Picture taken!'
            : 'Too much glare'}
        </p>
        <Button onClick={onCancel} variant="secondary">
          Cancel
        </Button>
      </Bottom>
    </BackdropStyled>
  );
};
