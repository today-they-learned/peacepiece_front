import { useState } from "react";
import { useUser } from "hooks";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import COLOR from "constants/color";
import Toggle from "components/common/Toggle";
import { FlexBox, FlexTextBox } from "components/common";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAddMailNoti, useDeleteMailNoti } from "hooks/queries/auth";

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 60%;
  padding-bottom: 0.5rem;
  min-width: 14rem;
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

const Avatar = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-right: 0.7rem;
  border-radius: 2rem;
  background-color: ${COLOR.font.secondary};
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
  top: 1.2rem;
  left: -10.4rem;
`;

const UserMenu = () => {
  const [, , removeCookie] = useCookies(["access_token"]);
  const { user: initialUser } = useUser();

  const [user, setUser] = useState(initialUser);
  const { mutate: addMailNoti } = useAddMailNoti(setUser);
  const { mutate: deleteMailNoti } = useDeleteMailNoti(setUser);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("refresh_token");
    removeCookie("access_token");
    window.location.href = "/";
  };

  const handleMail = () => {
    if (user.mail_notifiable) {
      deleteMailNoti();
    } else {
      addMailNoti();
    }
  };

  return (
    <Box>
      <Container>
        <FlexBox padding="1rem" width="100%" alignItems="center">
          <Avatar src={user.avatar} />
          <FlexBox wrap="wrap">
            <FlexTextBox margin="0 0.3rem 0 0" color={COLOR.font.primary}>
              환경지키미
            </FlexTextBox>
            <>
              <FlexTextBox margin="0 0 0 0">{user.username}</FlexTextBox>
              <FlexTextBox margin="0 0 0 0">님</FlexTextBox>
            </>
          </FlexBox>
        </FlexBox>
        <Line />
        <FlexBox width="100%" padding="0.5rem 1rem 0.5rem 1.15rem" column>
          {/* 계정설정 페이지 off */}
          {/* <FlexBox padding="0.5rem">
            <PersonOutlineIcon
              sx={{ fontSize: 28, color: COLOR.font.secondary }} 
            /> 
            <FlexTextBox color={COLOR.font.secondary} margin="0.1rem 0 0 1rem">
              계정 설정
            </FlexTextBox>
          </FlexBox> */}
          <button
            onClick={handleMail}
            style={{
              width: "100%",
              padding: 0,
              margin: "0.5rem",
              cursor: "pointer",
            }}
          >
            <FlexBox alignItems="center">
              <MailOutlineIcon sx={{ color: COLOR.font.secondary }} />
              <FlexTextBox
                color={COLOR.font.secondary}
                margin="0.2rem 1.3rem 0 1rem"
              >
                메일 알림
              </FlexTextBox>
              <Toggle size="small" checked={user.mail_notifiable} />
            </FlexBox>
          </button>
          <button
            onClick={logout}
            style={{
              width: "100%",
              padding: 0,
              margin: "0.5rem",
              cursor: "pointer",
            }}
          >
            <FlexBox alignItems="center">
              <LogoutIcon sx={{ color: COLOR.font.secondary }} />
              <FlexTextBox color="#ff4e4e" margin="0.2rem 1rem 0 1rem">
                로그아웃
              </FlexTextBox>
            </FlexBox>
          </button>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default UserMenu;
