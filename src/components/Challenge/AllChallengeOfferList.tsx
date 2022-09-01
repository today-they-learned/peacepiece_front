import { FlexBox } from "components/common";
import COLOR from "constants/color";
import ChallengeOfferCard from "./Card/ChallengeOfferCard";

interface Props {
  challenges: Array<{
    id: number;
    userName: string;
    content: string;
    like: number;
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
            userName={challenge.userName}
            content={challenge.content}
            like={challenge.like}
            clicked={challenge.clicked}
          />
        );
      })}
    </FlexBox>
  );
};

export default AllChallengeOfferList;
