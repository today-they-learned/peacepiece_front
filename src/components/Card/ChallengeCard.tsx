import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import ChallengeFigure from "components/common/ChallengeFigure";

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

const HashTagBox = styled.div`
  display: flex;
`;

const HashTag = styled.div`
  font-family: "Pr-Medium";
  font-size: 0.75rem;
  color: ${COLOR.white};
  margin-right: 0.5rem;
`;

const ChallengeCard = (props: Props) => {
  const { margin } = props;
  const Tags = ["001a", "텀블러_챌린지"];
  return (
    <Container margin={margin}>
      <Thumbnail src={`${process.env.PUBLIC_URL}/images/card.png`} />
      <ContentBox>
        <Title>텀블러로 커피 마시는 멋진 나</Title>
        <ChallengeInfo>
          <ChallengeFigure person={10} point={100} />
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
ChallengeCard.defaultProps = defaultProps;

export default ChallengeCard;
