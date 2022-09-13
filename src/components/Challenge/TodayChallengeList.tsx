import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChallengeBanner } from "components/Challenge";
import { ChallengeType } from "types";
import { Desktop, Mobile, Tablet } from "hooks/mediaQuery";
import { useChallengeDailyData } from "hooks/queries/challenge";
import TodayChallengeCardWrapper from "./Card/TodayChallengeCardWrapper";
import { ChallengeCard } from "./Card";

const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem 0;
  padding: 1rem;
  gap: 2rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    margin: 2rem 0 1rem 0;
  }
`;

const todayChallengeTitleList = [
  "📌 오늘의 챌린지",
  "😇 오늘은 이런 챌린지 어때요?",
  "🚀 데일리 챌린지",
  "🥺 오늘은 꼭 챌린지 도전해봐요!",
];

const script = {
  tootip: (
    <>
      오늘만 참여할 수 있는 챌린지에요. <br />
      한번 바로 확인해볼까요?
    </>
  ),
};

const TodayChallengeList = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const { data: challenges, isFetched } = useChallengeDailyData();

  useEffect(() => {
    setTitleIdx(Math.floor(Math.random() * todayChallengeTitleList.length));
  }, []);

  return (
    <>
      <Desktop>
        <ChallengeBanner
          width="100%"
          margin="0 0 3rem 0"
          title={todayChallengeTitleList[titleIdx]}
          tooltip={script.tootip}
        >
          <CardContainer>
            {isFetched &&
              challenges.map((challenge: ChallengeType) => (
                <TodayChallengeCardWrapper
                  key={`today-challenges_${challenge.id}`}
                  gap="2rem"
                >
                  <ChallengeCard challenge={challenge} />
                </TodayChallengeCardWrapper>
              ))}
          </CardContainer>
        </ChallengeBanner>
      </Desktop>
      <Tablet>
        <ChallengeBanner
          width="100%"
          margin="0 0 3rem 0"
          title={todayChallengeTitleList[titleIdx]}
          tooltip={script.tootip}
        >
          <CardContainer>
            {isFetched &&
              challenges.map((challenge: ChallengeType) => (
                <TodayChallengeCardWrapper
                  key={`today-challenges_${challenge.id}`}
                  gap="2rem"
                >
                  <ChallengeCard challenge={challenge} />
                </TodayChallengeCardWrapper>
              ))}
          </CardContainer>
        </ChallengeBanner>
      </Tablet>
      <Mobile>
        <ChallengeBanner
          width="100%"
          margin="0 0 3rem 0"
          title={todayChallengeTitleList[titleIdx]}
          tooltip={script.tootip}
        >
          <CardContainer>
            {challenges?.map((challenge: ChallengeType) => (
              <ChallengeCard
                challenge={challenge}
                key={`today-challenges_${challenge.id}`}
              />
            ))}
          </CardContainer>
        </ChallengeBanner>
      </Mobile>
    </>
  );
};

export default TodayChallengeList;
