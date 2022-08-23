import styled from "styled-components";
import COLOR from "constants/color";
import Toggle from "components/common/Toggle";
import FlexBox from "../common/FlexBox";

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 60%;
  padding-bottom: 0.5rem;
  width: 14rem;
  background: ${COLOR.white};
  border-radius: 0.6rem;
  box-shadow: 2px 2px 8px ${COLOR.bg.modalShadow};
  z-index: 10;
  :after {
    border-top: 0px solid transparent;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-bottom: 1.5rem solid white;
    content: "";
    position: absolute;
    top: -0.6rem;
    left: 10.5rem;
    z-index: 10;
  }
`;

const Avatar = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 0.7rem;
  border-radius: 2rem;
  background-color: gray;
  opacity: 0.5;
`;

const Line = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: 0.06rem;
  background-color: ${COLOR.font.secondary};
  opacity: 0.4;
`;

const ProfileLabel = styled.label`
  margin: 0.55rem 0.3rem 0 0;
  font-size: 0.9rem;
  font-weight: bolder;
`;

const AccountIcon = styled.img.attrs({
  src: "../../../account.png",
})`
  width: 1.6rem;
  height: 1.4rem;
  margin: 0.1rem 0.3rem 0 1.1rem;
  cursor: pointer;
  opacity: 0.3;
`;

const MailIcon = styled.img.attrs({
  src: "../../../mail.png",
})`
  width: 1.4rem;
  height: 1.2rem;
  margin: 0.2rem 0.4rem 0 1.2rem;
  cursor: pointer;
`;

const LogoutIcon = styled.img.attrs({
  src: "../../../logout.png",
})`
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.2rem 0.5rem 0 1.3rem;
  cursor: pointer;
`;

const SettingLabel = styled.label`
  margin: 0.1rem 1.5rem 0 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #606060;
  cursor: pointer;
`;

const ProfileModal = () => {
  return (
    <Container>
      <FlexBox padding="1rem">
        <Avatar />
        <ProfileLabel style={{ color: "#3CE87B" }}>환경지키미</ProfileLabel>
        <ProfileLabel>권소예</ProfileLabel>
        <ProfileLabel style={{ color: "#606060" }}>님</ProfileLabel>
      </FlexBox>
      <Line />
      <FlexBox margin="0.2rem 0 0 0" padding="0.5rem">
        <AccountIcon />
        <SettingLabel>계정 설정</SettingLabel>
      </FlexBox>
      <FlexBox margin="0.1rem 0 0 0" padding="0.5rem">
        <MailIcon />
        <SettingLabel>메일 알림</SettingLabel>
        <Toggle checked={false} />
      </FlexBox>
      <FlexBox padding="0.5rem">
        <LogoutIcon />
        <SettingLabel style={{ color: "#ff4e4e" }}>로그아웃</SettingLabel>
      </FlexBox>
    </Container>
  );
};

export default ProfileModal;
