import { EndedChallengeBanner } from "components/Challenge/Banner";
import ChallengeOfferGather from "components/Challenge/Banner/ChallengeOfferGather";
import OfferChallengeBanner from "components/Challenge/Banner/OfferChallengeBanner";
import NoticKeyword from "components/Challenge/Card/NoticKeyword";
import TodayChallengeList from "components/Challenge/TodayChallengeList";
import WeeklyChallengeList from "components/Challenge/WeeklyChallengeList";
import { FlexBox } from "components/common";
import { Desktop, Tablet, Mobile } from "hooks/mediaQuery";

const Challenge = () => {
  return (
    <div style={{ height: "100%" }}>
      <Desktop>
        <FlexBox justifyContent="center" height="100%" margin="2rem 0 0 0">
          <FlexBox column alignItems="center" margin="0 2rem 10rem 0">
            <TodayChallengeList />
            <WeeklyChallengeList />
            <ChallengeOfferGather />
          </FlexBox>
          <FlexBox column alignItems="center">
            <NoticKeyword />
            <OfferChallengeBanner />
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
          <FlexBox width="100%" justifyContent="center" alignItems="center">
            <NoticKeyword />
            <OfferChallengeBanner />
          </FlexBox>
          <TodayChallengeList />
          <WeeklyChallengeList />
          <ChallengeOfferGather />
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
          <NoticKeyword />
          <TodayChallengeList />
          <WeeklyChallengeList />
          <ChallengeOfferGather />
        </FlexBox>
      </Mobile>
    </div>
  );
};

export default Challenge;
