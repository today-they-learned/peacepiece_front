import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";

const Container = styled.div`
  width: 16.3rem;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin-bottom: 2.8rem;
`;

const Thumbnail = styled.img`
  width: 16.3rem;
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;
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

const Card = () => {
  const Tags = ["001a", "텀블러_챌린지"];
  return (
    <Container>
      <Thumbnail src="images/card.png" />
      <ContentBox>
        <Title>텀블러로 커피 마시는 멋진 나</Title>
        <ChallengeInfo>
          <Personnel>
            <Person src="images/person.png" />
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

export default Card;
