import { useParams } from "react-router-dom";
import { useChallengeData } from "hooks/queries/challenge";
import CertificationBanner from "components/Challenge/Banner/CertificationBanner";
import ChallengeDetailBanner from "components/Challenge/Banner/ChallengeDetailBanner";
import ChallengeTestimonial from "components/Challenge/Banner/ChallengeTestimonial";
import RelatedChallengeBanner from "components/Challenge/Banner/RelatedChallengeBanner";
import styled from "styled-components";

const ChallengeDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  height: 100%;
  gap: 2rem;
  margin: 0 0 2rem 0;
`;

const DetailInfoContainer = styled.div`
  flex: 2 2 calc((100% - 2rem) * 2 / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 0 10rem 0;
  @media (max-width: 1000px) {
    flex: 1 1 100%;
  }
`;

const SubInfoContainer = styled.div`
  flex: 1 1 calc((100% - 2rem) / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ChallengeDetail = () => {
  const { id } = useParams();
  const { data } = useChallengeData(id);

  return (
    <ChallengeDetailContainer>
      <DetailInfoContainer>
        <ChallengeDetailBanner challenge={data} />
        <ChallengeTestimonial title={data?.title} isEnded={data?.is_ended} />
      </DetailInfoContainer>
      <SubInfoContainer>
        {!data?.is_ended && (
          <CertificationBanner title={data?.title} isProved={data?.is_proved} />
        )}
        <RelatedChallengeBanner title="🧐 비슷한 챌린지가 있어요!" />
      </SubInfoContainer>
    </ChallengeDetailContainer>
  );
};

export default ChallengeDetail;
