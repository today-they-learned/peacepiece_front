import { Link } from "react-router-dom";
import { ChallengeBanner } from "components/Challenge";
import { FlexButton, FlexTextBox, FlexBox } from "components/common";
import COLOR from "constants/color";
import { Desktop, Tablet } from "hooks/mediaQuery";

const script = {
  title: "챌린지 제안하기",
  text: "환경을 위한 여러분만의 챌린지를 제안해주세요!",
  url: "/challenge/offer",
};

const OfferChallengeBanner = () => {
  return (
    <div style={{ width: "100%" }}>
      <Desktop>
        <ChallengeBanner
          theme="banner"
          title={script.title}
          background="transparent"
          margin="0 0 2rem 0"
        >
          <FlexTextBox fontSize="0.93rem">{script.text}</FlexTextBox>
          <FlexBox
            justifyContent="flex-end"
            margin="3.3rem 0 0 0"
            background="transparent"
          >
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
      </Desktop>
      <Tablet>
        <ChallengeBanner
          theme="banner"
          title={script.title}
          background="transparent"
          height="17.56rem"
          margin="0 0 2rem 2rem"
          widthTablet="93%"
        >
          <FlexTextBox fontSize="0.93rem">{script.text}</FlexTextBox>
          <FlexBox
            justifyContent="flex-end"
            margin="3.3rem 0 0 0"
            tabletMargin="7rem 0 0 0"
            background="transparent"
          >
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
      </Tablet>
    </div>
  );
};

export default OfferChallengeBanner;
