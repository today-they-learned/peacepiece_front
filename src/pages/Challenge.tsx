import { useUser } from "hooks";
import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeSuggestionGather from "components/Challenge/Banner/ChallengeSuggestionGather";
import ChallengeSuggestionBanner from "components/Challenge/Banner/ChallengeSuggestionBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallengeList from "components/Challenge/TodayChallengeList";
import WeeklyChallengeList from "components/Challenge/WeeklyChallengeList";
import { FlexBox } from "components/common";
import { Desktop, Tablet, Mobile } from "hooks/mediaQuery";

const Challenge = () => {
  const { user } = useUser();
  return (
    <div style={{ height: "100%" }}>
      <Desktop>
        <FlexBox
          width="100%"
          justifyContent="center"
          height="100%"
          margin="2rem 0 0 0"
          gap="2rem"
        >
          <FlexBox column width="100%" alignItems="center" margin="0 0 10rem 0">
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
      </Desktop>
      <Tablet>
        <FlexBox
          column
          alignItems="center"
          height="100%"
          margin="2rem 0 0 0"
          padding="2rem"
        >
          {user && (
            <FlexBox width="100%" justifyContent="center" alignItems="center">
              <NoticKeyword />
              <ChallengeSuggestionBanner />
            </FlexBox>
          )}
          <TodayChallengeList />
          <WeeklyChallengeList />
          <ChallengeSuggestionGather />
        </FlexBox>
      </Tablet>
      <Mobile>
        <FlexBox
          column
          alignItems="center"
          width="100%"
          height="100%"
          margin="2rem 0 0 0"
          padding="2rem"
        >
          {user && <NoticKeyword />}
          <TodayChallengeList />
          <WeeklyChallengeList />
          <ChallengeSuggestionGather />
        </FlexBox>
      </Mobile>
    </div>
  );
};

export default Challenge;
