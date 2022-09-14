import AllChallengeSuggestion from "components/Challenge/Banner/AllChallengeSuggestion";
import ChallengeSuggestionInput from "components/Challenge/Banner/ChallengeSuggestionInput";
import { FlexBox } from "components/common";

const ChallengeSuggestion = () => {
  return (
    <FlexBox
      column
      justifyContent="center"
      alignItems="center"
      margin="3rem 0"
      gap="2rem"
    >
      <ChallengeSuggestionInput />
      <AllChallengeSuggestion />
    </FlexBox>
  );
};

export default ChallengeSuggestion;
