import { ChallengeSuggestionCard } from "components/Challenge/Card";
import { ChallengeBanner } from "components/Challenge";
import COLOR from "constants/color";
import { FlexBox } from "components/common";
import { useChallengeSuggestionListData } from "hooks/queries/challenge/suggestion";
import { ChallengeSuggestionType } from "types";
import ChallengeSuggestionGatherWrapper from "../Card/ChallengeSuggestionGatherWrapper";

const ChallengeSuggestionGather = () => {
  const { data, isFetched } = useChallengeSuggestionListData(4, "main");

  return (
    <ChallengeBanner
      width="100%"
      widthMobile="100%"
      title="🧐 이런 챌린지는 어때요?"
      url="/challenge/suggestion"
    >
      <FlexBox
        wrap="wrap"
        margin="2rem 0.5rem 1rem 1rem"
        background={COLOR.bg.primary}
        gap="1rem"
      >
        {isFetched &&
          data.pages[0].data.results.map(
            (suggestion: ChallengeSuggestionType) => (
              <ChallengeSuggestionGatherWrapper
                key={`challenge_suggestion_${suggestion.id}`}
                gap="1rem"
              >
                <ChallengeSuggestionCard suggestion={suggestion} main />
              </ChallengeSuggestionGatherWrapper>
            )
          )}
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeSuggestionGather;
