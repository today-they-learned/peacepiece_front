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
            suggestion={suggestion}
            gap="1rem"
          />
        );
      })}
    </>
  );
};

export default AllChallengeSuggestionPartialList;
