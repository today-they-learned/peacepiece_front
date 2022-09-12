import styled from "styled-components";
import WeeklyChallengeCard from "components/Challenge/Card/WeeklyChallengeCard";
import { ChallengeType } from "types";

interface Props {
  challenges: ChallengeType[];
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
      {/* 위클리챌린지카드 미니카트랑 통합하기 => 이름은 미니카드로 */}
      {challenges.slice(-2).map((challenge) => {
        return <WeeklyChallengeCard key={challenge.id} challenge={challenge} />;
      })}
    </SimilarChallengeListContainer>
  );
};

export default SimilarChallengeList;
