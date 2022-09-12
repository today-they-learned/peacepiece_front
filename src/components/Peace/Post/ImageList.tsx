import { FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { ArticleType } from "types";

interface Props {
  article: ArticleType;
}

const ImageListContainer = styled.div`
  display: flex;
  margin: 0.5rem 0 1rem 0;
  max-width: 10rem;

  @media only screen and (max-width: 767px) {
    max-width: 9rem;
  }
`;

const LastImageContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  max-width: 10rem;

  @media only screen and (max-width: 767px) {
    max-width: 9rem;
  }
`;

const Image = styled.img`
  flex: 1;
  width: 11rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
  background: ${COLOR.bg.primary};
`;

const LastImage = styled.img`
  width: 11rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
  opacity: 0.3;
  position: relative;
  background: ${COLOR.bg.primary};
`;

const ImageList = (props: Props) => {
  const { article } = props;
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <ImageListContainer>
      {isDesktop
        ? article.images.slice(0, 3).map((image, idx) => {
            if (article.images.length > 3 && idx === 2) {
              return (
                <LastImageContainer key={`postImage_${image.id}`}>
                  <LastImage src={image.file} />
                  <FlexTextBox
                    position="absolute"
                    right="50%"
                    bottom="30%"
                    fontSize="0.8rem"
                    fontFamily="Pr-Bold"
                  >
                    +{article.images.length - 3}
                  </FlexTextBox>
                </LastImageContainer>
              );
            }
            return <Image src={image.file} key={`postImage_${image.id}`} />;
          })
        : article.images.slice(0, 2).map((image, idx) => {
            if (article.images.length > 2 && idx === 1) {
              return (
                <LastImageContainer key={`postImage_${image.id}`}>
                  <LastImage src={image.file} />
                  <FlexTextBox
                    position="absolute"
                    right="50%"
                    bottom="30%"
                    fontSize="0.8rem"
                    fontFamily="Pr-Bold"
                  >
                    +{article.images.length - 2}
                  </FlexTextBox>
                </LastImageContainer>
              );
            }
            return <Image src={image.file} key={`postImage_${image.id}`} />;
          })}
    </ImageListContainer>
  );
};

export default ImageList;
