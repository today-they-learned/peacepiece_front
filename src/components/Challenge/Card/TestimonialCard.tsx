import { Link } from "react-router-dom";
import { useDate } from "hooks";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { ArticleType } from "types";

interface Props {
  piece: ArticleType;
}

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const Image = styled.img`
  width: 8.125rem;
  height: 5rem;
  border-radius: 0.625rem;
  margin-right: 1rem;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const LastImage = styled.img`
  width: 8.125rem;
  height: 5rem;
  border-radius: 0.625rem;
  margin-right: 1rem;
  opacity: 0.3;
  position: relative;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const TestimonialCard = (props: Props) => {
  const { piece } = props;
  return (
    <FlexBox
      width="45rem"
      background={COLOR.bg.nav}
      borderRadius="1.25rem"
      column
      padding="1.3rem 1.5rem"
      position="relative"
      margin="0 0 1.5rem 0"
    >
      <FlexBox background="transparent" alignItems="center" margin="0 0 1rem 0">
        <Avatar src={piece.writer.avatar} />
        <FlexBox
          column
          justifyContent="center"
          background="transparent"
          margin="0 0 0 1rem"
        >
          <FlexTextBox
            fontSize="0.8rem"
            fontFamily="Pr-Bold"
            color={COLOR.font.primary}
          >
            {piece.writer.username}
          </FlexTextBox>
          <FlexTextBox
            fontSize="0.625rem"
            fontFamily="Pr-Medium"
            color={COLOR.font.secondary}
          >
            {useDate(piece.created_at)}
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
      <FlexTextBox fontSize="0.8rem" fontFamily="Pr-Medium" color={COLOR.white}>
        {piece.content}
      </FlexTextBox>
      <FlexBox
        width="100%"
        justifyContent="space-between"
        alignItems="baseline"
        margin="15px 0 0 0"
      >
        <FlexBox background="transparent" margin="0.5rem 0 0 0">
          {piece.images.slice(0, 3).map((image, idx) => {
            if (piece.images.length > 3 && idx === 2) {
              return (
                <FlexBox position="relative" background="transparent">
                  <LastImage src={image.file} key={image.id} />
                  <FlexTextBox
                    position="absolute"
                    right="50%"
                    bottom="30%"
                    fontSize="0.8rem"
                    fontFamily="Pr-Bold"
                  >
                    +{piece.images.length - 3}
                  </FlexTextBox>
                </FlexBox>
              );
            }
            return <Image src={image.file} key={image.id} />;
          })}
        </FlexBox>
        <Link to={`/piece/${piece.id}`}>
          <FlexTextBox
            color={COLOR.font.link}
            fontSize="0.8rem"
            fontFamily="Pr-Bold"
          >
            자세히 보러가기
          </FlexTextBox>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};

export default TestimonialCard;
