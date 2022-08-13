import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  fontSize: "16px",
  fontFamily: "Pr-SemiBold",
  color: "white",
};

const FlexTextButton = (props: Props) => {
  const { children, width, height, margin, fontSize, fontFamily, color } =
    props;

  const FlexTextButton = styled.button`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: 0;
    font-size: ${fontSize};
    font-family: ${fontFamily};
    text-align: left;
    color: ${color};
  `;

  return <FlexTextButton>{children}</FlexTextButton>;
};
FlexTextButton.defaultProps = defaultProps;

export default FlexTextButton;
