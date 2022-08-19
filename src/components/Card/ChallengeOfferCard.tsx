import COLOR from "constants/color";
import React from "react";
import styled from "styled-components";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
  userName: string;
  content: string;
  like: number;
  clicked: boolean;
}

const Container = styled.div`
  width: 22rem;
  height: auto;
  border-radius: 1rem;
  background-color: ${COLOR.bg.secondary};
  padding: 1rem 1.5rem 2rem 1.5rem;
  margin-bottom: 3rem;
`;

const User = styled.div`
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.font.secondary};
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.white};
  margin-bottom: 1rem;
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
  const { userName, content, like, clicked } = props;
  return (
    <Container>
      <User>{userName}</User>
      <Content>{content}</Content>
      <LikeContainer>
        {clicked ? (
          <AiFillLike color={COLOR.font.primary} size="20" />
        ) : (
          <AiOutlineLike color={COLOR.font.primary} size="20" />
        )}
        <LikeNumber>{like}</LikeNumber>
      </LikeContainer>
    </Container>
  );
};

export default ChallengeOfferCard;
