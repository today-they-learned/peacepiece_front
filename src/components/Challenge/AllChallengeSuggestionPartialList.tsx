import { ChallengeSuggestionType } from "types";
import ChallengeSuggestionCard from "./Card/ChallengeSuggestionCard";
import ChallengeSuggestionGatherWrapper from "./Card/ChallengeSuggestionGatherWrapper";

interface Props {
  suggestions: ChallengeSuggestionType[];
}

const AllChallengeSuggestionPartialList = (props: Props) => {
  const { suggestions } = props;
  return (
    <>
      {suggestions.map((suggestion) => {
        return (
          <ChallengeSuggestionGatherWrapper
            key={`suggestion-${suggestion.id}`}
            gap="1rem"
            all
          >
            <ChallengeSuggestionCard suggestion={suggestion} />
          </ChallengeSuggestionGatherWrapper>
        );
      })}
    </>
  );
};

export default AllChallengeSuggestionPartialList;
