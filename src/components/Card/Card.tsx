import React from "react";

import styled, { css } from "styled-components";
import COLOR from "constants/color";

const Container = styled.div`
  width: 16.3rem;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin-left: 5rem; // 잘 보이게 하려고 잠시 설정
`;

const Thumbnail = styled.img`
  width: 16.3rem;
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;
`;

const CompleteThumb = styled.img`
  width: 16.3rem;
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;
  filter: brightness(50%);
`;

const CompleteBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${COLOR.font.primary};
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background: ${COLOR.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompleteWord = styled.span`
  width: 2rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  line-height: 1rem;
`;

const ContenttBox = styled.div`
  margin-left: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1rem;
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
  color: ${COLOR.font.secondary};
`;

const Point = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${COLOR.font.secondary};
`;

const HashTagBox = styled.div`
  display: flex;
`;

const HashTag = styled.div`
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

const Card = () => {
  const Tags = ["001a", "텀블러_챌린지"];
  return (
    <>
      <Container>
        <Thumbnail src="images/card.png" />
        <ContenttBox>
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
        </ContenttBox>
      </Container>
      <Container>
        <CompleteThumb src="images/card.png" />
        <CompleteBox>
          <CompleteWord>내가 해냄</CompleteWord>
        </CompleteBox>
        <ContenttBox>
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
        </ContenttBox>
      </Container>
    </>
  );
};

export default Card;