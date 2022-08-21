import React from "react";
import COLOR from "constants/color";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
  borderRadius: "1.4rem",
  backgroundColor: COLOR.bg.secondary,
};

const BannerBox = (props: Props) => {
  const {
    children,
    width,
    height,
    margin,
    padding,
    borderRadius,
    backgroundColor,
  } = props;

  const BannerBox = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    border-radius: ${borderRadius};
    background-color: ${backgroundColor};
  `;

  return <BannerBox>{children}</BannerBox>;
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
