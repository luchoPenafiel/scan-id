// Components
import { Button } from '../Button/Button';

// Styles
import { Top, Bottom, Camera } from './Backdrop.styles';

export const Backdrop = ({
  onCancel,
  result,
  imageTaken,
}: {
  result: 'Approved' | 'Rejected';
  imageTaken: string;
  onCancel: () => void;
}) => {
  return (
    <>
      <Top>
        <h2 data-testid="title">Take picture</h2>
        <p data-testid="description">Fit your ID card inside the frame.</p>
        <p data-testid="description">
          The picture will be taken automatically.
        </p>
      </Top>
      <Camera result={result} imageTaken={!!imageTaken} />

      <Bottom>
        <p>
          {result === 'Approved' ? (
            <>
              <img
                src={'./icons/check-rounded.svg'}
                alt="Check icon"
                data-testid="approved"
              />{' '}
              Picture taken!
            </>
          ) : (
            <>
              <img
                src={'./icons/bulb.svg'}
                alt="Bulb icon"
                data-testid="rejected"
              />
              Room lighting is too low
            </>
          )}
        </p>
        <Button onClick={onCancel} variant="secondary" testid="cancel">
          Cancel
        </Button>
      </Bottom>
    </>
  );
};
