import { ChallengeSuggestionType } from "types";
import ChallengeSuggestionCard from "./Card/ChallengeSuggestionCard";

interface Props {
  suggestions: ChallengeSuggestionType[];
}

const AllChallengeSuggestionPartialList = (props: Props) => {
  const { suggestions } = props;
  return (
    <>
      {suggestions.map((suggestion) => {
        return (
          <ChallengeSuggestionCard
            key={`suggestion-${suggestion.id}`}
            suggester={suggestion.suggester.username}
            content={suggestion.content}
            feedbackCount={suggestion.feedback_count}
            isFeedbacked={suggestion.is_feedbacked}
            gap="1rem"
          />
        );
      })}
    </>
  );
};

export default AllChallengeSuggestionPartialList;
