import { FlexBox } from "components/common";
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

const SimilarChallengeList = (props: Props) => {
  const { challenges } = props;
  return (
    <FlexBox column justifyContent="center" alignItems="center">
      {challenges.slice(-2).map((challenge) => {
        return (
          <ChallengeMiniCard
            key={challenge.id}
            title={challenge.title}
            description={challenge.description}
          />
        );
      })}
    </FlexBox>
  );
};

export default SimilarChallengeList;
