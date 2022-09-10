import { useState } from "react";
import COLOR from "constants/color";
import styled from "styled-components";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
  suggester: string;
  content: string;
  feedbackCount: number;
  isFeedbacked: boolean;
  gap?: string;
}

const defaultProps = {
  gap: "1rem",
};

const Container = styled.div<{ gap: string }>`
  height: auto;
  border-radius: 1rem;
  background-color: ${COLOR.bg.secondary};
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  margin: 0 0.5rem 1rem 0;

  flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};
  max-width: ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};

  @media (max-width: 1023px) {
    flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
    max-width: ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
  }

  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const User = styled.div`
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.font.secondary};
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  height: 5rem;
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.white};
  margin-bottom: 0.8rem;
`;

const LikeContainer = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeNumber = styled.span`
  font-size: 1rem;
  font-family: "Pr-Regular";
  color: ${COLOR.white};
  margin-left: 0.5rem;
`;

const ChallengeOfferCard = ({
  suggester,
  content,
  feedbackCount,
  isFeedbacked,
  gap,
}: Props) => {
  const [clicked, setClicked] = useState(isFeedbacked);
  const [like, setLike] = useState(feedbackCount);
  const clickedLike = () => {
    setLike((prev) => prev + 1);
    setClicked((prev) => !prev);
  };
  return (
    <Container gap={gap}>
      <User>{suggester}</User>
      <Content>{content}</Content>
      <LikeContainer>
        {clicked ? (
          <AiFillLike color={COLOR.font.primary} size="20" />
        ) : (
          <AiOutlineLike
            color={COLOR.font.primary}
            size="20"
            onClick={clickedLike}
            style={{ cursor: "pointer" }}
          />
        )}
        <LikeNumber>{like}</LikeNumber>
      </LikeContainer>
    </Container>
  );
};
ChallengeOfferCard.defaultProps = defaultProps;

export default ChallengeOfferCard;
