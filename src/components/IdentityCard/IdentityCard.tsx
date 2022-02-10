// Styes
import { Wrapper, Empty } from './IdentityCard.styles';

export const IdentityCard = ({ image }: { image?: string }) => {
  if (image) {
    return <Wrapper image={image}>Imagen</Wrapper>;
  } else {
    return (
      <Wrapper>
        <Empty>Holisssss</Empty>
      </Wrapper>
    );
  }
};
