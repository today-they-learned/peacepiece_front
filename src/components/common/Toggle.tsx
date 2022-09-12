import { useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";

interface Props {
  size?: string;
  checked: boolean;
  // disabled?: boolean;
}

export const ToggleBtn = styled.button<Props>`
  width: ${(props) => (props.size === "small" ? "2.2rem" : "3.2rem")};
  height: ${(props) => (props.size === "small" ? "1.2rem" : "1.4rem")};
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
  width: ${(props) => (props.size === "small" ? "1.2rem" : "1.4rem")};
  height: ${(props) => (props.size === "small" ? "1.2rem" : "1.4rem")};
  border-radius: 1rem;
  position: absolute;
  left: 0;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.checked &&
    css`
      transform: translate(${props.size === "smail" ? "1rem" : "1.1rem"}, 0);
      transition: all 0.5s ease-in-out;
    `}

  @media only screen and (max-width: 767px) {
    ${(props) =>
      props.checked &&
      css`
        transform: translate(1.3rem, 0);
        transition: all 0.5s ease-in-out;
      `}
  }
`;

const Toggle = (props: Props) => {
  const { checked, size } = props;
  const [toggle] = useState(checked);

  // const clickedToggle = () => {
  //   if (!disabled) setToggle((prev) => !prev);
  // };

  return (
    <ToggleBtn size={size} checked={toggle}>
      <Circle size={size} checked={toggle} />
    </ToggleBtn>
  );
};

Toggle.defaultProps = { size: "medium" };

export default Toggle;
