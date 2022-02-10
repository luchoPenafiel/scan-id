// Styes
import { Wrapper, Empty } from './IdentityCard.styles';

// Components
import { Button } from '../Button/Button';

export const IdentityCard = ({ image }: { image?: string }) => {
  const handleClickOnTakePicture = () => {
    console.log('take picture');
  };

  if (image) {
    return <Wrapper image={image}>Imagen</Wrapper>;
  } else {
    return (
      <Wrapper>
        <Empty>
          <Button onClick={handleClickOnTakePicture}>Take picture</Button>
        </Empty>
      </Wrapper>
    );
  }
};
