import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
import COLOR from "constants/color";

interface Props {
  category: string;
  images: string[];
}

const ChallengeCarouselContainer = styled.div`
  flex: 1 1 50%;
  padding: 1rem;

  @media only screen and (max-width: 767px) {
    flex: 1 1 100%;
    padding: 1rem;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 2rem;
  max-height: 25rem;
`;

const StyledCarousel = styled(Carousel)``;

const ServiceCarousel = ({ category, images }: Props) => {
  return (
    <ChallengeCarouselContainer>
      <StyledCarousel
        animation="slide"
        cycleNavigation
        autoPlay
        indicators
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: COLOR.font.primary,
            borderRadius: 0,
          },
        }}
      >
        {images.map((image, index) => {
          return (
            <CarouselImage
              key={`${category}-image-${index}}`}
              src={image}
              alt=""
            />
          );
        })}
      </StyledCarousel>
    </ChallengeCarouselContainer>
  );
};

export default ServiceCarousel;
