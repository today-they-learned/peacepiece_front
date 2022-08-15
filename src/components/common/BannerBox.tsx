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
  banner?: boolean;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
  borderRadius: "1.4rem",
  banner: false,
};

const BannerBox = (props: Props) => {
  const { children, width, height, padding, margin, borderRadius, banner } =
    props;

  const dir = banner ? COLOR.bg.banner : COLOR.bg.primary;

  const BannerBox = styled.div`
    width: ${width};
    height: ${height};
    padding: ${padding};
    margin: ${margin};
    border-radius: ${borderRadius};
    background: ${dir};
  `;

  return <BannerBox>{children}</BannerBox>;
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
