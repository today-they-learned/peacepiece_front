import { useState } from "react";
import COLOR from "constants/color";
import styled from "styled-components";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
  suggester: string;
  content: string;
  feedbackCount: number;
  clicked: boolean;
  margin?: string;
}

const defaultProps = {
  margin: "0.5rem 1rem 0.5rem 0rem",
};

const Container = styled.div<{ margin: string }>`
  width: 22rem;
  height: auto;
  border-radius: 1rem;
  background-color: ${COLOR.bg.secondary};
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  margin: ${(props) => props.margin};
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

const ChallengeOfferCard = (props: Props) => {
  const { suggester, content, feedbackCount, clicked, margin } = props;
  const [like, setLike] = useState(0);
  return (
    <Container margin={margin}>
      <User>{suggester}</User>
      <Content>{content}</Content>
      <LikeContainer>
        {clicked ? (
          <AiFillLike color={COLOR.font.primary} size="20" />
        ) : (
          <AiOutlineLike color={COLOR.font.primary} size="20" />
        )}
        <LikeNumber>{feedbackCount}</LikeNumber>
      </LikeContainer>
    </Container>
  );
};
ChallengeOfferCard.defaultProps = defaultProps;

export default ChallengeOfferCard;
