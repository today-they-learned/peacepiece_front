import { useParams } from "react-router-dom";
import { useChallengeData } from "hooks/queries/challenge";

import { FlexBox } from "components/common";
import CertificationBanner from "components/Challenge/Banner/CertificationBanner";
import ChallengeDetailBanner from "components/Challenge/Banner/ChallengeDetailBanner";
import ChallengeTestimonial from "components/Challenge/Banner/ChallengeTestimonial";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";

const ChallengeDetail = () => {
  const { id } = useParams();
  const { data } = useChallengeData(id);

  return (
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <ChallengeDetailBanner challenge={data} />
        <ChallengeTestimonial />
      </FlexBox>
      <FlexBox column alignItems="center">
        <CertificationBanner title={data?.title} isProved={data?.is_proved} />
        <SimilarChallengeBanner title="🧐 비슷한 챌린지가 있어요!" />
      </FlexBox>
    </FlexBox>
  );
};

export default ChallengeDetail;
