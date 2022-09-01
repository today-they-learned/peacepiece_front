import { FlexBox, FlexButton, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { PieceType } from "../Banner/ChallengeTestimonial";

interface Props {
  piece: PieceType;
}

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 8.125rem;
  height: 5rem;
  border-radius: 0.625rem;
  margin-right: 1rem;
`;

const LastImage = styled.img`
  width: 8.125rem;
  height: 5rem;
  border-radius: 0.625rem;
  margin-right: 1rem;
  opacity: 0.3;
  position: relative;
`;

const TestimonialCard = (props: Props) => {
  const { piece } = props;
  return (
    <FlexBox
      width="45rem"
      height="15rem"
      background={COLOR.bg.nav}
      borderRadius="1.25rem"
      column
      padding="1rem"
      position="relative"
      margin="0 0 2rem 0"
    >
      <FlexBox
        background="transparent"
        alignItems="center"
        margin="0 0 0.5rem 0"
      >
        <Avatar src={piece.avatar} />
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
            {piece.userName}
          </FlexTextBox>
          <FlexTextBox
            fontSize="0.625rem"
            fontFamily="Pr-Medium"
            color={COLOR.font.secondary}
          >
            {piece.date}
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
      <FlexTextBox fontSize="0.8rem" fontFamily="Pr-Medium" color={COLOR.white}>
        {piece.content}
      </FlexTextBox>
      <FlexBox background="transparent" margin="0.5rem 0 0 0">
        {piece.images.slice(0, 3).map((image, idx) => {
          if (idx === 2) {
            return (
              <FlexBox position="relative" background="transparent">
                <LastImage src={image} key={idx} />
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
          return <Image src={image} key={idx} />;
        })}
      </FlexBox>
      <FlexButton
        position="absolute"
        right="1rem"
        bottom="1rem"
        color={COLOR.font.link}
        fontSize="0.8rem"
        fontFamily="Pr-Bold"
      >
        자세히 보러가기
      </FlexButton>
    </FlexBox>
  );
};

export default TestimonialCard;
