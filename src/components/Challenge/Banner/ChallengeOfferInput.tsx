import { useTextArea } from "hooks";
import { useAddChallengeSuggestion } from "hooks/queries/challenge/suggestion";
import { FlexBox, FlexButton, FlexTextBox } from "components/common";
import { Textarea } from "components/Form";
import { ChallengeBanner } from "components/Challenge";
import COLOR from "constants/color";

const script = {
  title: "🌱 챌린지 제안하기",
  text: "어떤 챌린지가 PeacePiece에서 열리면 좋을까요? 다양한 생각을 공유해주세요",
};

const ChallengeOfferInput = () => {
  const [value, onChangeValue, setValue] = useTextArea("");

  const handleSubmit = () => {
    const data = {
      content: value,
    };
    addSuggestion(data);
  };

  const onSuccess = () => {
    setValue("");
  };

  const { mutate: addSuggestion } = useAddChallengeSuggestion({ onSuccess });

  return (
    <ChallengeBanner title={script.title} width="76rem">
      <Textarea
        value={value}
        onChange={onChangeValue}
        width="72rem"
        text={script.text}
        minRow={6}
        maxLength={100}
        margin="1rem 0 0 0"
      />
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        margin="0.5rem 1rem"
        background={COLOR.bg.primary}
      >
        <FlexTextBox
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          color={COLOR.font.disabled}
        >
          글자 수 {value.length} / 100
        </FlexTextBox>
        <FlexButton
          fontSize="1.1rem"
          onClick={handleSubmit}
          fontFamily="Pr-Bold"
          backgroundColor={COLOR.bg.banner}
          color={COLOR.font.default}
        >
          제안하기
        </FlexButton>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeOfferInput;
