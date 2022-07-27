/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  toggle: boolean;
}

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 60%;
  padding-bottom: 0.5rem;
  width: 14rem;
  background: white;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 8px #c5c5c5;
  :after {
    border-top: 0px solid transparent;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid white;
    content: "";
    position: absolute;
    top: -0.6rem;
    left: 11rem;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
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
  background-color: #a3a3a3;
  opacity: 0.4;
`;

const ProfileLabel = styled.label`
  margin: 0.55rem 0.3rem 0 0;
  font-size: 0.9rem;
  font-weight: bolder;
`;

const LineContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
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

export const Toggle = styled.button<Props>`
  width: 2.8rem;
  height: 1.4rem;
  margin-top: 0.1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "none" : "#3CE87B")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<Props>`
  background-color: white;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1rem;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(1.35rem, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const ProfileModal = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <Container>
      <ProfileContainer>
        <Avatar />
        <ProfileLabel style={{ color: "#3CE87B" }}>환경지키미</ProfileLabel>
        <ProfileLabel>권소예</ProfileLabel>
        <ProfileLabel style={{ color: "#606060" }}>님</ProfileLabel>
      </ProfileContainer>
      <Line />
      <LineContainer>
        <AccountIcon />
        <SettingLabel>계정 설정</SettingLabel>
      </LineContainer>
      <LineContainer>
        <MailIcon />
        <SettingLabel>메일 알림</SettingLabel>
        <Toggle onClick={clickedToggle} toggle={toggle}>
          <Circle toggle={toggle} />
        </Toggle>
      </LineContainer>
      <LineContainer>
        <LogoutIcon />
        <SettingLabel style={{ color: "#ff4e4e" }}>로그아웃</SettingLabel>
      </LineContainer>
    </Container>
  );
};

export default ProfileModal;
