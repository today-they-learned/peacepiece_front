import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import ChallengeBanner from "components/Challenge/ChallengeBanner";

const Writing = () => {
  return (
    <ChallengeBanner
      title="피스 글쓰기"
      width="52.25rem"
      titleColor={COLOR.font.primary}
      padding="2rem 3.5rem"
    >
      <FlexBox
        width="45rem"
        height="4.8rem"
        borderRadius="1.2rem"
        alignItems="center"
        padding="0 0 0 2rem"
        margin="2rem 0 0 0"
        background={COLOR.bg.default}
      >
        <FlexTextBox
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          color={COLOR.font.disabled}
        >
          오늘은 환경을 위해 어떤 활동을 하셨나요? 모두에게 알려주세요😊
        </FlexTextBox>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default Writing;
