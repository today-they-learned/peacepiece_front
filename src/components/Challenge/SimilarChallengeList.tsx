import { FlexBox } from "components/common";
import ChallengeMiniCard from "./Card/ChallengeMiniCard";

interface Props {
  challenges: Array<{
    id: number;
    title: string;
    person: number;
    point: number;
    content: string;
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
            content={challenge.content}
          />
        );
      })}
    </FlexBox>
  );
};

export default SimilarChallengeList;
