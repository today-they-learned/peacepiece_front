import { useUser } from "hooks";
import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeSuggestionGather from "components/Challenge/Banner/ChallengeSuggestionGather";
import ChallengeSuggestionBanner from "components/Challenge/Banner/ChallengeSuggestionBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallengeList from "components/Challenge/TodayChallengeList";
import WeeklyChallengeList from "components/Challenge/WeeklyChallengeList";
import { FlexBox } from "components/common";

const Challenge = () => {
  const { user } = useUser();
  return (
    <FlexBox
      justifyContent="center"
      height="100%"
      margin="2rem 0 0 0"
      gap="2rem"
    >
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <TodayChallengeList />
        <WeeklyChallengeList />
        <ChallengeSuggestionGather />
      </FlexBox>
      <FlexBox column alignItems="center" gap="2rem">
        {user && <NoticKeyword />}
        <ChallengeSuggestionBanner />
        <EndedChallengeBanner />
      </FlexBox>
    </FlexBox>
  );
};

export default Challenge;
