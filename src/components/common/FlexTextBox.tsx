import COLOR from "constants/color";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
}

const defaultProps = {
  width: "19rem",
  height: "3.4rem",
  margin: "0",
  fontSize: "16px",
  color: "white",
  backgroundColor: COLOR.bg.secondary,
};

const FlexTextButton = (props: Props) => {
  const { children, width, height, margin, fontSize, color, backgroundColor } =
    props;

  const FlexTextButton = styled.button`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: 0;
    font-size: ${fontSize};
    font-family: "Pr-SemiBold";
    text-align: left;
    background-color: ${backgroundColor};
    color: ${color};
  `;

  return <FlexTextButton>{children}</FlexTextButton>;
};
FlexTextButton.defaultProps = defaultProps;

export default FlexTextButton;
