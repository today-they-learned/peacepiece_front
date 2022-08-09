import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const CenterNavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const Container = styled.div`
  position: relative;
  /* width: 4rem; */
  text-align: center;
  cursor: pointer;
`;

const Island = styled.span<{ isClicked: string }>`
  opacity: 0.3;
  font-size: 1rem;
  &::after {
    content: "";
    position: absolute;
    top: 2rem;
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
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const Challenge = styled.span<{ isClicked: string }>`
  opacity: 0.3;
  font-size: 1rem;
  &::after {
    content: "";
    position: absolute;
    top: 2rem;
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
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const Piece = styled.span<{ isClicked: string }>`
  opacity: 0.3;
  font-size: 1rem;
  &::after {
    content: "";
    position: absolute;
    top: 2rem;
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
        width: 100%;
      }
    `}

  &:hover::after {
    width: 100%;
  }
`;

const RightNavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
`;

const Start = styled.div`
  background-color: ${COLOR.font.primary};
  width: 5.5rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  color: ${COLOR.white};
  display: flex;
  justify-content: center;
`;

const MobileNavbar = () => {
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
      <Logo src="images/logo.png" />
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
        </Container>
        <Container>
          <Piece id="piece" onClick={getClickNav} isClicked={currentClickNav}>
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
  );
};

export default MobileNavbar;
