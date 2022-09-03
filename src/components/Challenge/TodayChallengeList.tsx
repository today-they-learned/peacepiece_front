import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeTitle } from "components/Challenge";
import { ChallengeType } from "types/challenge";
import { ChallengeCard } from "./Card";
import TodayChallengeCardWrapper from "./Card/TodayChallengeCardWrapper";

const dummyChallenges: ChallengeType[] = [
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
];

const Container = styled.div`
  width: 52.25rem;
  height: 30rem;
  border-radius: 1.25rem;
  background-color: ${COLOR.bg.primary};
  padding: 1.5rem 1rem 0.5rem 1rem;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  gap: 2rem;
`;

const TodayChallengeList = () => {
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
        {dummyChallenges.map((challenge) => (
          <TodayChallengeCardWrapper
            key={`today-challenges${challenge.id}`}
            gap="2rem"
          >
            <ChallengeCard challenge={challenge} />
          </TodayChallengeCardWrapper>
        ))}
      </CardContainer>
    </Container>
  );
};

export default TodayChallengeList;