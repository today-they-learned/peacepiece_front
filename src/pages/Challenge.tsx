import { useUser } from "hooks";
import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeOfferGather from "components/Challenge/Banner/ChallengeOfferGather";
import OfferChallengeBanner from "components/Challenge/Banner/OfferChallengeBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallengeList from "components/Challenge/TodayChallengeList";
import WeeklyChallengeList from "components/Challenge/WeeklyChallengeList";
import { FlexBox } from "components/common";

const Challenge = () => {
  const { user } = useUser();
  return (
    <FlexBox justifyContent="center" height="100%" margin="2rem 0 0 0">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <TodayChallengeList />
        <WeeklyChallengeList />
        <ChallengeOfferGather />
      </FlexBox>
      <FlexBox column alignItems="center">
        {user && <NoticKeyword />}
        <OfferChallengeBanner />
        <EndedChallengeBanner />
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
