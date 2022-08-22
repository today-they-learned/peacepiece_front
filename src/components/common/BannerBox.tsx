import React from "react";
import COLOR from "constants/color";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  theme?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "1rem",
  padding: "1.5rem",
  borderRadius: "1.4rem",
  theme: "default",
};

const BannerBox = (props: Props) => {
  const defaultTheme = COLOR.bg.primary;
  const bannerTheme = COLOR.bg.banner;
  const secondaryTheme = COLOR.bg.secondary;

  const { children, width, height, margin, padding, borderRadius, theme } =
    props;
  let themeColor = defaultTheme;

  switch (theme) {
    case "banner":
      themeColor = bannerTheme;
      break;
    case "secondary":
      themeColor = secondaryTheme;
      break;
    default:
      themeColor = defaultTheme;
  }

  const BannerBox = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    border-radius: ${borderRadius};
    background: ${themeColor};
  `;

  return <BannerBox>{children}</BannerBox>;
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
