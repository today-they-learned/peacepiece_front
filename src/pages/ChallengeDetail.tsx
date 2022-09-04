import CertificationBanner from "components/Challenge/Banner/CertificationBanner";
import ChallengeDetailBanner from "components/Challenge/Banner/ChallengeDetailBanner";
import ChallengeTestimonial from "components/Challenge/Banner/ChallengeTestimonial";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import { FlexBox } from "components/common";

const ChallengeDetail = () => {
  return (
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <ChallengeDetailBanner />
        <ChallengeTestimonial />
      </FlexBox>
      <FlexBox column alignItems="center">
        <CertificationBanner />
        <SimilarChallengeBanner />
      </FlexBox>
    </FlexBox>
  );
};

export default ChallengeDetail;
