import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeOfferGather from "components/Challenge/Banner/ChallengeOfferGather";
import OfferChallengeBanner from "components/Challenge/Banner/OfferChallengeBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallenge from "components/Challenge/TodayChallenge";
import WeeklyChallengeList from "components/Challenge/WeeklyChallengeList";
import { FlexBox } from "components/common";

const Challenge = () => {
  return (
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <TodayChallenge />
        <WeeklyChallengeList />
        <ChallengeOfferGather />
      </FlexBox>
      <FlexBox column alignItems="center">
        <NoticKeyword />
        <OfferChallengeBanner />
        <EndedChallengeBanner />
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
