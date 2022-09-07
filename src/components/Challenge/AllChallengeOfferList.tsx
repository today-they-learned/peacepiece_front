import { FlexBox } from "components/common";
import COLOR from "constants/color";
import { ChallengeSuggestionType } from "types";
import ChallengeOfferCard from "./Card/ChallengeOfferCard";

interface Props {
  suggestions: ChallengeSuggestionType[];
}

const AllChallengeOfferList = (props: Props) => {
  const { suggestions } = props;
  return (
    <FlexBox wrap="wrap" margin="2rem 0 0 0" background={COLOR.bg.primary}>
      {suggestions.map((suggestion) => {
        return (
          <ChallengeOfferCard
            key={suggestion.id}
            suggester={suggestion.suggester.username}
            content={suggestion.content}
            feedbackCount={suggestion.feedback_count}
            clicked={suggestion.is_feedbacked}
          />
        );
      })}
    </FlexBox>
  );
};

export default AllChallengeOfferList;
