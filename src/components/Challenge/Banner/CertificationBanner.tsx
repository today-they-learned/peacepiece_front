import { BannerBox, FlexBox, FlexButton, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";
import ChallengeBanner from "../ChallengeBanner";

const script = {
  title: "챌린지 인증하기",
  url: "challenge/certification", // 인증화면 라우터 만들어지면 수정하기
};

const dummyChallenge = {
  userName: "김신건",
  challengeTitle: "일회용품 No! 다시 쓰기 Yes!",
  isCertified: true,
};

const PrimaryText = styled.span`
  color: ${COLOR.font.primary};
`;

const CertifiedText = styled.span`
  color: ${COLOR.font.info};
`;

const CertificationBanner = () => {
  return (
    <ChallengeBanner
      title={script.title}
      tooltip="챌린지 인증을 하면 PP 포인트를 받을 수 있어요! 😎"
    >
      <FlexBox justifyContent="center" width="22rem" height="11rem">
        <BannerBox
          width="100%"
          height="100%"
          theme="secondary"
          margin="0.5rem 0 0 0"
          position="relative"
        >
          <FlexTextBox fontFamily="Pr-Bold">
            <PrimaryText>{dummyChallenge.userName}</PrimaryText>님, <br />
            <PrimaryText>{dummyChallenge.challengeTitle}</PrimaryText> <br />
            {dummyChallenge.isCertified ? (
              <FlexTextBox>
                챌린지 미션은 이미 <CertifiedText>인증</CertifiedText>하셨네요!
              </FlexTextBox>
            ) : (
              <FlexTextBox>챌린지 미션을 달성하셨나요?</FlexTextBox>
            )}
          </FlexTextBox>
          <FlexButton
            borderRadius="0.625rem"
            backgroundColor={COLOR.bg.primary}
            color={
              dummyChallenge.isCertified
                ? COLOR.font.primaryDisabled
                : COLOR.font.primary
            }
            fontSize="1.25rem"
            fontFamily="Pr-Bold"
            position="absolute"
            right="1rem"
            bottom="1rem"
          >
            {dummyChallenge.isCertified ? "인증완료" : "인증하기"}
          </FlexButton>
        </BannerBox>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default CertificationBanner;
