import { ChallengeSuggestionCard } from "components/Challenge/Card";
import { ChallengeBanner } from "components/Challenge";
import COLOR from "constants/color";
import { FlexBox } from "components/common";
import { useChallengeSuggestionListData } from "hooks/queries/challenge/suggestion";
import { ChallengeSuggestionType } from "types";

const ChallengeSuggestionGather = () => {
  const { data, isFetched } = useChallengeSuggestionListData(3, "main");

  return (
    <ChallengeBanner
      width="100%"
      widthMobile="100%"
      padding="2rem 2.5rem"
      title="🧐 이런 챌린지는 어때요?"
      url="/challenge/suggestion"
    >
      <FlexBox
        wrap="wrap"
        margin="2rem 0 0 0"
        background={COLOR.bg.primary}
        gap="1rem"
      >
        {isFetched &&
          data.pages[0].data.results.map(
            (suggestion: ChallengeSuggestionType) => (
              <ChallengeSuggestionCard
                key={`challenge_suggestion_${suggestion.id}`}
                suggestion={suggestion}
                gap="1rem"
                main
              />
            )
          )}
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeSuggestionGather;
