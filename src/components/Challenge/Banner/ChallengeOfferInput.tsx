import { FlexBox, FlexButton, FlexTextBox } from "components/common";
import Input from "components/Form/Input";
import COLOR from "constants/color";
import ChallengeBanner from "../ChallengeBanner";

const script = {
  title: "🌱 챌린지 제안하기",
  text: "어떤 챌린지가 PeacePiece에서 열리면 좋을까요? 다양한 생각을 공유해주세요",
};

const ChallengeOfferInput = () => {
  return (
    <ChallengeBanner title={script.title} width="76rem">
      <Input width="72rem" text={script.text} minRow={6} margin="1rem 0 0 0" />
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
          글자 수 10 / 100
        </FlexTextBox>
        <FlexButton
          fontSize="1.25rem"
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
