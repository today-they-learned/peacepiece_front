import styled from "styled-components";
import COLOR from "constants/color";
import Toggle from "components/common/Toggle";
import { FlexBox, FlexTextBox } from "components/common";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 60%;
  padding-bottom: 0.5rem;
  width: 14rem;
  border-radius: 0.6rem;
  z-index: 10;
  background: ${COLOR.bg.secondary};
  :after {
    border-top: 0px solid transparent;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.5rem solid ${COLOR.bg.secondary};
    content: "";
    position: absolute;
    top: -0.8rem;
    left: 10.5rem;
    z-index: 10;
  }
`;

const Avatar = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 0.7rem;
  border-radius: 2rem;
  background-color: ${COLOR.font.secondary};
  opacity: 0.5;
  object-fit: cover;
`;

const Line = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: 0.06rem;
  background-color: ${COLOR.font.secondary};
  opacity: 0.4;
`;

const Box = styled.div`
  position: relative;
  top: 1rem;
  left: -10.4rem;
`;

const ProfileTooltip = () => {
  return (
    <Box>
      <Container>
        <FlexBox padding="1rem">
          <Avatar />
          <FlexTextBox margin="0.5rem 0.5rem 0 0" color={COLOR.font.primary}>
            환경지키미
          </FlexTextBox>
          <FlexTextBox margin="0.5rem 0 0 0">권소예</FlexTextBox>
          <FlexTextBox margin="0.5rem 0 0 0">님</FlexTextBox>
        </FlexBox>
        <Line />
        <FlexBox padding="0.5rem 1rem 1rem 1.15rem" column>
          <FlexBox padding="0.5rem">
            <PersonOutlineIcon
              sx={{ fontSize: 28, color: COLOR.font.secondary }}
            />
            <FlexTextBox color={COLOR.font.secondary} margin="0.1rem 0 0 1rem">
              계정 설정
            </FlexTextBox>
          </FlexBox>
          <FlexBox margin="0.1rem 0 0 0.1rem" padding="0.5rem">
            <MailOutlineIcon
              sx={{ color: COLOR.font.secondary, marginTop: 0.1 }}
            />
            <FlexTextBox
              color={COLOR.font.secondary}
              margin="0.1rem 1rem 0 1rem"
            >
              메일 알림
            </FlexTextBox>
            <Toggle checked={false} />
          </FlexBox>
          <FlexBox padding="0.5rem 0.5rem  0.5rem  0.7rem">
            <LogoutIcon sx={{ color: COLOR.font.secondary }} />
            <FlexTextBox color="#ff4e4e" margin="0 0 0 1rem">
              로그아웃
            </FlexTextBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default ProfileTooltip;
