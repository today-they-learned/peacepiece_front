import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeOfferGather from "components/Challenge/Banner/ChallengeOfferGather";
import OfferChallengeBanner from "components/Challenge/Banner/OfferChallengeBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallenge from "components/Challenge/TodayChallenge";
import WeeklyChallenge from "components/Challenge/WeeklyChallenge";
import { FlexBox } from "components/common";

const Challenge = () => {
  return (
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <TodayChallenge />
        <WeeklyChallenge />
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
