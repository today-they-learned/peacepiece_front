import { useNavigate } from "react-router-dom";
import { BannerBox, FlexBox, FlexButton, FlexTextBox } from "components/common";
import { useUser } from "hooks";
import styled from "styled-components";
import COLOR from "constants/color";
import ChallengeBanner from "../ChallengeBanner";

const script = {
  title: "챌린지 인증하기",
  url: "challenge/certification", // 인증화면 라우터 만들어지면 수정하기
};

const PrimaryText = styled.span`
  color: ${COLOR.font.primary};
`;

const CertifiedText = styled.span`
  color: ${COLOR.font.info};
`;

interface Props {
  title: string;
  isProved: boolean;
}

const CertificationBanner = (props: Props) => {
  const { title, isProved } = props;
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <ChallengeBanner
      title={script.title}
      tooltip={<>챌린지 인증을 하면 PP 포인트를 받을 수 있어요! 😎</>}
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
            {user && (
              <>
                <PrimaryText>{user?.username}</PrimaryText>님, <br />
              </>
            )}
            <PrimaryText>{title}</PrimaryText> <br />
            {isProved ? (
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
            color={isProved ? COLOR.font.primaryDisabled : COLOR.font.primary}
            fontSize="1.25rem"
            fontFamily="Pr-Bold"
            position="absolute"
            right="1rem"
            bottom="1rem"
            // 로그인시 모달창 액션 넣기
            onClick={user ? undefined : () => navigate("/sign")}
          >
            {isProved ? "인증완료" : "인증하기"}
          </FlexButton>
        </BannerBox>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default CertificationBanner;
