import { useParams } from "react-router-dom";
import { ChallengeTitle } from "components/Challenge";
import styled from "styled-components";
import COLOR from "constants/color";
import { useRelatedChallengeData } from "hooks/queries/challenge";
import SimilarChallengeList from "../SimilarChallengeList";

interface Props {
  title: string;
}

const RelatedChallengeBannerContainer = styled.div`
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

const RelatedChallengeBanner = (props: Props) => {
  const { title } = props;
  const { id } = useParams();

  const { data: relateds } = useRelatedChallengeData(id);

  return (
    !!relateds?.length && (
      <RelatedChallengeBannerContainer>
        <ChallengeTitle title={title} background="trasparent" />
        <SimilarChallengeList challenges={relateds} />
      </RelatedChallengeBannerContainer>
    )
  );
};

export default RelatedChallengeBanner;
