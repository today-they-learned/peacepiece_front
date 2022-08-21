import React, { useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";

interface Props {
  checked: boolean;
}

export const ToggleBtn = styled.button<Props>`
  width: 2.8rem;
  height: 1.4rem;
  margin-top: 0.2rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.checked ? "#C0E1CC" : COLOR.font.primary};
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
    props.checked &&
    css`
      transform: translate(1.35rem, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const Toggle = (props: Props) => {
  const { checked } = props;
  const [toggle, setToggle] = useState(checked);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <ToggleBtn onClick={clickedToggle} checked={toggle}>
      <Circle checked={toggle} />
    </ToggleBtn>
  );
};

export default Toggle;
