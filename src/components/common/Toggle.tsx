import React, { useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";

interface Props {
  toggle: boolean;
}

export const Togglee = styled.button<Props>`
  // 함수 이름 "Toggle"이랑 이름이 달라야 해서 Togglee로 설정했는데 더 좋은 이름 있으면 추천 받아요.
  width: 2.8rem;
  height: 1.4rem;
  margin-top: 0.2rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? "#C0E1CC" : COLOR.font.primary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div<Props>`
  background-color: ${COLOR.white};
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

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Togglee onClick={clickedToggle} toggle={toggle}>
      <Circle toggle={toggle} />
    </Togglee>
  );
};

export default Toggle;
