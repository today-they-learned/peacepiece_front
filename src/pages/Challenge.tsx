import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeOfferGather from "components/Challenge/Banner/ChallengeOfferGather";
import OfferChallengeBanner from "components/Challenge/Banner/OfferChallengeBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallenge from "components/Challenge/TodayChallenge";
import WeeklyChallenge from "components/Challenge/WeeklyChallenge";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Challenge = () => {
  return (
    <Container>
      <LeftContainer>
        <TodayChallenge />
        <WeeklyChallenge />
        <ChallengeOfferGather />
      </LeftContainer>
      <RightContainer>
        <NoticKeyword />
        <OfferChallengeBanner />
        <EndedChallengeBanner />
      </RightContainer>
    </Container>
  );
};

export default Challenge;
