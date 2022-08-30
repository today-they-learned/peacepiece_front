import { Link } from "react-router-dom";
import { ChallengeBanner } from "components/Challenge";
import { FlexButton, FlexTextBox, FlexBox } from "components/common";
import COLOR from "constants/color";

const script = {
  title: "챌린지 제안하기",
  text: "환경을 위한 여러분만의 챌린지를 제안해주세요!",
  url: "/challenge/offer",
};

const OfferChallengeBanner = () => {
  return (
    <ChallengeBanner theme="banner" title={script.title}>
      <FlexTextBox width="1000px" fontSize="0.93rem">
        {script.text}
      </FlexTextBox>
      <FlexBox justifyContent="flex-end" margin="3.3rem 0 0 0">
        <Link to={script.url}>
          <FlexButton
            color={COLOR.font.primary}
            backgroundColor={COLOR.bg.primary}
          >
            제안하기
          </FlexButton>
        </Link>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default OfferChallengeBanner;
