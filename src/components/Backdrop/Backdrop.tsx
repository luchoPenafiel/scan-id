// Components
import { Button } from '../Button/Button';

// Styles
import { BackdropStyled, Top, Bottom, X, Camera } from './Backdrop.styles';

export const Backdrop = ({
  onCancel,
  result,
  imageTaken,
  videoRef,
  handleCanPlay,
}: {
  result: boolean;
  imageTaken: string;
  onCancel: () => void;
  videoRef: any;
  handleCanPlay: () => void;
}) => {
  return (
    <BackdropStyled image={imageTaken}>
      <Top>
        <h2>Take picture</h2>
        <p>Fit your ID card inside the frame.</p>
        <p>The picture will be taken automatically.</p>
      </Top>
      <X />
      <Camera result={result} imageTaken={!!imageTaken}>
        <video
          ref={videoRef}
          onCanPlay={handleCanPlay}
          autoPlay
          playsInline
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </Camera>
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
