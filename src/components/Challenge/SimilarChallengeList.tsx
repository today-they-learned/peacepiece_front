import styled from "styled-components";
import ChallengeMiniCard from "./Card/ChallengeMiniCard";

interface Props {
  challenges: Array<{
    id: number;
    title: string;
    proverCnt: number;
    point: number;
    description: string;
  }>;
}

const SimilarChallengeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 0;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;

const SimilarChallengeList = (props: Props) => {
  const { challenges } = props;
  return (
    <SimilarChallengeListContainer>
      {challenges.slice(-2).map((challenge) => {
        return (
          <ChallengeMiniCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
          />
        );
      })}
    </SimilarChallengeListContainer>
  );
};

export default SimilarChallengeList;
