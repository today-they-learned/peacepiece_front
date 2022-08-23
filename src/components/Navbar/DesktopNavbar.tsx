/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

const Nav = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem 0 10rem;
  background-color: ${COLOR.bg.nav};
  font-family: "Pr-ExtraBold";
  position: relative;
`;

const Logo = styled.span`
  color: ${COLOR.font.primary};
  font-size: 20px;
  font-weight: bold;
`;

const CenterNavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const Container = styled.div`
  position: relative;
  width: 4rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Island = styled.span<{ isClicked: string }>`
  font-family: "Pr-Regular";
  font-size: 1rem;
  color: ${COLOR.font.disabled};
  &::after {
    content: "";
    position: absolute;
    top: 2.5em;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.font.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "island" &&
    css`
      &::after {
        width: 5rem;
      }
    `}

  &:hover::after {
    width: 5rem;
  }
`;

const Challenge = styled.span<{ isClicked: string }>`
  font-size: 1rem;
  font-family: "Pr-Regular";
  color: ${COLOR.font.disabled};
  &::after {
    content: "";
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.font.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "challenge" &&
    css`
      &::after {
        width: 5rem;
      }
    `}

  &:hover::after {
    width: 5rem;
  }
`;

const Piece = styled.span<{ isClicked: string }>`
  font-family: "Pr-Regular";
  font-size: 1rem;
  color: ${COLOR.font.disabled};
  &::after {
    content: "";
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.font.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "piece" &&
    css`
      &::after {
        width: 5rem;
      }
    `}

  &:hover::after {
    width: 5rem;
  }
`;

const RightNavItems = styled.div`
  width: 7rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled.div`
  background-color: ${COLOR.font.primary};
  width: 5.56rem;
  height: 2.5rem;
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  color: ${COLOR.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Profile = styled.div`
  background-color: ${COLOR.font.disabled};
  width: 2rem;
  height: 1.5rem;
  border-radius: 50%;
  margin: 0 2rem;
`;

const DropdownBox = styled.div<{ clickedChallenge: boolean }>`
  width: 100%;
  height: 4rem;
  background-color: ${COLOR.bg.navSecondary};
  display: none;
  text-align: center;
  position: absolute;
  top: 4.4rem;
  ${(props) =>
    props.clickedChallenge
      ? css`
          display: block;
        `
      : css`
          display: none;
        `};
`;

const DropdownTextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdonwText = styled.span`
  font-family: "Pr-Bold";
  font-size: 0.8rem;
  margin: 5.8rem;
  color: ${COLOR.font.disabled};
  cursor: pointer;
`;

const Navbar = () => {
  const [clickedChallenge, setClickedChallenge] = useState(false);
  const [currentClickNav, setCurrentClickNav] = useState("island");
  const [prevClickNav, setPrevClickNav] = useState(null);
  const [currentClickSubNav, setCurrentClickSubNav] =
    useState("proceed_challenge");
  const [prevClickSubNav, setPrevClickSubNav] = useState(null);

  const navigate = useNavigate();

  const onClickNav = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      setCurrentClickNav(e.target.id);

      if (e.target.id === "island") {
        navigate("/");
      } else {
        navigate(`/${e.target.id}`);
      }

      if (e.target.id === "challenge") {
        setClickedChallenge(true);
      } else {
        setClickedChallenge(false);
      }
    }
  };

  const onClickSubNav = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      setCurrentClickSubNav(e.target.id);

      if (e.target.id === "proceed_challenge") {
        navigate("/challenge");
      } else {
        navigate(`/${e.target.id}`);
      }
    }
  };

  useEffect(() => {
    if (currentClickNav !== null) {
      const current = document.getElementById(currentClickNav);
      current.style.color = `${COLOR.font.default}`;
      current.style.fontFamily = "Pr-Bold";
    }

    if (prevClickNav !== null) {
      const prev = document.getElementById(prevClickNav);
      prev.style.color = `${COLOR.font.disabled}`;
      prev.style.fontFamily = "Pr-Regular";
    }

    if (prevClickSubNav) {
      const prev = document.getElementById(prevClickSubNav);
      const proceedChallenge = document.getElementById("proceed_challenge");
      prev.style.color = `${COLOR.font.disabled}`;
      proceedChallenge.style.color = `${COLOR.font.primary}`;
      setCurrentClickSubNav("proceed_challenge");
    }

    setPrevClickNav(currentClickNav);
  }, [currentClickNav]);

  useEffect(() => {
    if (currentClickSubNav !== null) {
      const current = document.getElementById(currentClickSubNav);
      current.style.color = `${COLOR.font.primary}`;
    }

    if (prevClickSubNav !== null) {
      const prev = document.getElementById(prevClickSubNav);
      prev.style.color = `${COLOR.font.disabled}`;
    }

    setPrevClickSubNav(currentClickSubNav);
  }, [currentClickSubNav]);

  return (
    <>
      <Nav>
        <Logo>PeacePiece</Logo>
        <CenterNavItems>
          <Container>
            <Island
              id="island"
              onClick={onClickNav}
              isClicked={currentClickNav}
            >
              나의 섬
            </Island>
          </Container>
          <Container>
            <Challenge
              id="challenge"
              onClick={onClickNav}
              isClicked={currentClickNav}
            >
              챌린지
            </Challenge>
          </Container>
          <Container>
            <Piece id="piece" onClick={onClickNav} isClicked={currentClickNav}>
              피스
            </Piece>
          </Container>
        </CenterNavItems>
        <RightNavItems>
          <Start>시작하기</Start>
          {/* <IoIosNotificationsOutline size="30" />
          <Profile /> */}
        </RightNavItems>
      </Nav>
      <DropdownBox clickedChallenge={clickedChallenge}>
        <DropdownTextBox>
          <DropdonwText id="proceed_challenge" onClick={onClickSubNav}>
            진행 중인 챌린지
          </DropdonwText>
          <DropdonwText id="challenge/ended" onClick={onClickSubNav}>
            지난 챌린지
          </DropdonwText>
          <DropdonwText id="challenge/offer" onClick={onClickSubNav}>
            챌린지 제안
          </DropdonwText>
        </DropdownTextBox>
      </DropdownBox>
    </>
  );
};

export default Navbar;
