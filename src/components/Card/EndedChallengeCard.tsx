import React from "react";

import styled from "styled-components";
import COLOR from "constants/color";
import DidItIcon from "components/common/DidItIcon";

interface Props {
  margin?: string;
}

const defaultProps = {
  margin: "0",
};

const Container = styled.div`
  width: 16.3rem;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin: ${(props: Props) => props.margin};
`;

const CompleteThumb = styled.img`
  width: 16.3rem;
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;
  filter: brightness(50%);
`;

const ContentBox = styled.div`
  margin-left: 1rem;
`;

const Title = styled.div`
  font-family: "Pr-SemiBold";
  font-size: 1rem;
  color: ${COLOR.font.primary};
  margin-bottom: 0.5rem;
`;

const ChallengeInfo = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Personnel = styled.div`
  display: flex;
  margin-right: 1.2rem;
`;

const Person = styled.img`
  width: 1.1rem;
  height: 1rem;
  margin-right: 0.2rem;
`;

const Number = styled.span`
  font-size: 0.75rem;
  font-family: "Pr-Medium";
  color: ${COLOR.font.secondary};
`;

const Point = styled.span`
  font-size: 0.875rem;
  font-family: "Pr-Medium";
  color: ${COLOR.font.secondary};
`;

const HashTagBox = styled.div`
  display: flex;
`;

const HashTag = styled.div`
  font-family: "Pr-Medium";
  font-size: 0.75rem;
  color: ${COLOR.white};
  margin-right: 0.5rem;
`;

const EndedChallengeCard = (props: Props) => {
  const { margin } = props;
  const Tags = ["001a", "텀블러_챌린지"];
  return (
    <Container margin={margin}>
      <CompleteThumb src={`${process.env.PUBLIC_URL}/images/card.png`} />
      <DidItIcon isAbsolute top="1rem" right="1rem" />
      <ContentBox>
        <Title>텀블러로 커피 마시는 멋진 나</Title>
        <ChallengeInfo>
          <Personnel>
            <Person src={`${process.env.PUBLIC_URL}/images/person.png`} />
            <Number>10명</Number>
          </Personnel>
          <Point>PP 100</Point>
        </ChallengeInfo>
        <HashTagBox>
          {Tags.map((tag, index) => (
            <HashTag key={index}>#{tag}</HashTag>
          ))}
        </HashTagBox>
      </ContentBox>
    </Container>
  );
};
EndedChallengeCard.defaultProps = defaultProps;

export default EndedChallengeCard;
