import { FlexBox } from "components/common";
import COLOR from "constants/color";
import { ChallengeSuggestionType } from "types";
import ChallengeSuggestionCard from "./Card/ChallengeSuggestionCard";

interface Props {
  suggestions: ChallengeSuggestionType[];
}

const AllChallengeSuggestionList = (props: Props) => {
  const { suggestions } = props;
  return (
    <FlexBox
      wrap="wrap"
      margin="2rem 0 0 0"
      background={COLOR.bg.primary}
      gap="1rem"
    >
      {suggestions.map((suggestion) => {
        return (
          <ChallengeSuggestionCard
            key={suggestion.id}
            suggester={suggestion.suggester.username}
            content={suggestion.content}
            feedbackCount={suggestion.feedback_count}
            isFeedbacked={suggestion.is_feedbacked}
            gap="1rem"
          />
        );
      })}
    </FlexBox>
  );
};

export default AllChallengeSuggestionList;
