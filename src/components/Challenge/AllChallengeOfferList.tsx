import { FlexBox } from "components/common";
import COLOR from "constants/color";
import ChallengeOfferCard from "./Card/ChallengeOfferCard";

interface Props {
  challenges: Array<{
    id: number;
    suggester: string;
    content: string;
    feedbackCount: number;
    clicked: boolean;
  }>;
}

const AllChallengeOfferList = (props: Props) => {
  const { challenges } = props;
  return (
    <FlexBox wrap="wrap" margin="2rem 0 0 0" background={COLOR.bg.primary}>
      {challenges.map((challenge) => {
        return (
          <ChallengeOfferCard
            key={challenge.id}
            suggester={challenge.suggester}
            content={challenge.content}
            feedbackCount={challenge.feedbackCount}
            clicked={challenge.clicked}
          />
        );
      })}
    </FlexBox>
  );
};

export default AllChallengeOfferList;
