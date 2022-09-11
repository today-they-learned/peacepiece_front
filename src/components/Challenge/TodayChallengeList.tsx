import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeTitle } from "components/Challenge";
import { ChallengeType } from "types";
import { Desktop, Mobile, Tablet } from "hooks/mediaQuery";
import { useChallengeDailyData } from "hooks/queries/challenge";
import TodayChallengeCardWrapper from "./Card/TodayChallengeCardWrapper";
import { ChallengeCard } from "./Card";

const Container = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 1.25rem;
  background-color: ${COLOR.bg.primary};
  padding: 1.5rem 1rem 0.5rem 1rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  gap: 2rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
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

  const { data: challenges } = useChallengeDailyData();

  return (
    <>
      <Desktop>
        <Container>
          <ChallengeTitle
            title={randomTitle}
            toolTipContent={
              <>
                오늘만 참여할 수 있는 챌린지에요. <br />
                한번 바로 확인해볼까요?
              </>
            }
            background={COLOR.bg.primary}
          />
          <CardContainer>
            {challenges?.map((challenge: ChallengeType) => (
              <TodayChallengeCardWrapper
                key={`today-challenges_${challenge.id}`}
                gap="2rem"
              >
                <ChallengeCard challenge={challenge} />
              </TodayChallengeCardWrapper>
            ))}
          </CardContainer>
        </Container>
      </Desktop>
      <Tablet>
        <Container>
          <ChallengeTitle
            title={randomTitle}
            toolTipContent="오늘만 참여할 수 있는 챌린지에요. 한번 바로 확인해볼까요"
            background={COLOR.bg.primary}
          />
          <CardContainer>
            {challenges?.map((challenge: ChallengeType) => (
              <TodayChallengeCardWrapper
                key={`today-challenges_${challenge.id}`}
                gap="2rem"
              >
                <ChallengeCard challenge={challenge} />
              </TodayChallengeCardWrapper>
            ))}
          </CardContainer>
        </Container>
      </Tablet>
      <Mobile>
        <Container>
          <ChallengeTitle
            title={randomTitle}
            toolTipContent="오늘만 참여할 수 있는 챌린지에요. 한번 바로 확인해볼까요"
            background={COLOR.bg.primary}
          />
          <CardContainer>
            {challenges?.map((challenge: ChallengeType) => (
              <ChallengeCard
                challenge={challenge}
                key={`today-challenges_${challenge.id}`}
              />
            ))}
          </CardContainer>
        </Container>
      </Mobile>
    </>
  );
};

export default TodayChallengeList;
