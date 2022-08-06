/* eslint-disable no-undef */
import React, { useEffect, useState, ButtonHTMLAttributes } from "react";

import styled, { css } from "styled-components";
import COLOR from "constants/color";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem 0 10rem;
`;

const Logo = styled.span`
  color: ${COLOR.primary};
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
  opacity: 0.3;
  font-size: 18px;
  &::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "island" &&
    css`
      &::after {
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const Challenge = styled.span<{ isClicked: string }>`
  opacity: 0.3;
  font-size: 18px;

  &::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "challenge" &&
    css`
      &::after {
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const DropdownBox = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.gray};
  display: none;
  text-align: center;

  ${Container}:hover & {
    display: block;
  }
`;

const DropdonwText = styled.span`
  font-size: 1rem;
`;

const Piece = styled.span<{ isClicked: string }>`
  opacity: 0.3;
  font-size: 18px;
  &::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background: ${COLOR.primary};
    transition: all 0.5s;
  }

  ${(props) =>
    props.isClicked === "piece" &&
    css`
      &::after {
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const RightNavItems = styled.div`
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Start = styled.div`
  background-color: ${COLOR.primary};
  width: 6rem;
  border-radius: 1.5rem;
  padding: 0.7rem 1rem;
  color: ${COLOR.white};
  display: flex;
  justify-content: center;
`;

const Profile = styled.div`
  background-color: ${COLOR.gray};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0 2rem;
`;

const Navbar = () => {
  const [currentClickNav, setCurrentClickNav] = useState("island");
  const [prevClickNav, setPrevClickNav] = useState(null);

  const navigate = useNavigate();

  const getClickNav = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof Element) {
      setCurrentClickNav(e.target.id);

      if (e.target.id === "island") {
        navigate("/");
      } else {
        navigate(`/${e.target.id}`);
      }
    }
  };

  useEffect(() => {
    if (currentClickNav !== null) {
      const current = document.getElementById(currentClickNav);
      current.style.opacity = "1";
      current.style.fontWeight = "bold";
    }

    if (prevClickNav !== null) {
      const prev = document.getElementById(prevClickNav);
      prev.style.opacity = "0.3";
      prev.style.fontWeight = "normal";
    }

    setPrevClickNav(currentClickNav);
  }, [currentClickNav]);

  return (
    <Nav>
      <Logo>PeacePiece</Logo>
      <CenterNavItems>
        <Container>
          <Island id="island" onClick={getClickNav} isClicked={currentClickNav}>
            나의 섬
          </Island>
        </Container>
        <Container>
          <Challenge
            id="challenge"
            onClick={getClickNav}
            isClicked={currentClickNav}
          >
            챌린지
          </Challenge>
          <DropdownBox>
            <DropdonwText>진행 중</DropdonwText>
            <DropdonwText>종료</DropdonwText>
          </DropdownBox>
        </Container>
        <Container>
          <Piece id="piece" onClick={getClickNav} isClicked={currentClickNav}>
            피스
          </Piece>
        </Container>
      </CenterNavItems>
      <RightNavItems>
        <Start>시작하기</Start>
        {/* <IoIosNotificationsOutline size="35" />
      <Profile /> */}
      </RightNavItems>
    </Nav>
  );
};

export default Navbar;
