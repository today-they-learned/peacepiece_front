import { useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";

interface Props {
  checked: boolean;
  disabled?: boolean;
}

export const ToggleBtn = styled.button<Props>`
  width: 3.2rem;
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
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 1rem;
  position: absolute;
  left: 0;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.checked &&
    css`
      transform: translate(1.7rem, 0);
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
  const { checked, disabled } = props;
  const [toggle, setToggle] = useState(checked);

  const clickedToggle = () => {
    if (!disabled) setToggle((prev) => !prev);
  };

  return (
    <ToggleBtn onClick={clickedToggle} checked={toggle}>
      <Circle checked={toggle} />
    </ToggleBtn>
  );
};

Toggle.defaultProps = { disabled: false };

export default Toggle;
