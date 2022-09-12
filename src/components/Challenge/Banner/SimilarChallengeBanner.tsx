import { ChallengeTitle } from "components/Challenge";
import styled from "styled-components";
import COLOR from "constants/color";
import { useRecommendChallengeData } from "hooks/queries/challenge";
import SimilarChallengeList from "../SimilarChallengeList";

interface Props {
  title: string;
}

const SimilarChallengeBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  padding: 1.5rem;
  border-radius: 1.4rem;
  background: ${COLOR.bg.primary};

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const SimilarChallengeBanner = (props: Props) => {
  const { title } = props;

  const { data: recommends } = useRecommendChallengeData();

  return (
    !!recommends?.length && (
      <SimilarChallengeBannerContainer>
        <ChallengeTitle title={title} background="trasparent" />
        <SimilarChallengeList challenges={recommends} />
      </SimilarChallengeBannerContainer>
    )
  );
};

export default SimilarChallengeBanner;
