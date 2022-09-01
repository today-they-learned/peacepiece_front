import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeTitle } from "components/Challenge";
import { ChallengeCard } from "./Card";

const Container = styled.div`
  width: 52.25rem;
  height: 30rem;
  border-radius: 1.25rem;
  background-color: ${COLOR.bg.primary};
  padding: 1.5rem 1rem 0.5rem 1rem;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
`;

const TodayChallenge = () => {
  const todayChallengeTitleList = [
    "📌 오늘의 챌린지",
    "😇 오늘은 이런 챌린지 어때요?",
    "🚀 데일리 챌린지",
    "🥺 오늘은 꼭 챌린지 도전해봐요!",
  ];

  const randomTitle =
    todayChallengeTitleList[
      Math.floor(Math.random() * todayChallengeTitleList.length)
    ];

  return (
    <Container>
      <ChallengeTitle
        title={randomTitle}
        toolTipContent="오늘만 참여할 수 있는 챌린지에요. 한번 바로 확인해볼까요"
        background={COLOR.bg.primary}
      />
      <CardContainer>
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </CardContainer>
    </Container>
  );
};

export default TodayChallenge;
