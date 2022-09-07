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
            userName={suggestion.suggester.username}
            content={suggestion.content}
            like={suggestion.feedback_count}
            clicked={suggestion.is_feedbacked}
          />
        );
      })}
    </FlexBox>
  );
};

export default AllChallengeOfferList;
