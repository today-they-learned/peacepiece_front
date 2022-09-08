/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  theme?: string;
  position?: string;
  maxWidthTablet?: string;
  widthTablet?: string;
  maxWidthMobile?: string;
  widthMobile?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0 1rem 2rem 1rem",
  padding: "1.5rem",
  borderRadius: "1.4rem",
  theme: "default",
  position: "static",
  maxWidthTablet: "0",
  widthTablet: "0",
  maxWidthMobile: "0",
  widthMobile: "0",
};

const BannerBox = (props: Props) => {
  const defaultTheme = COLOR.bg.primary;
  const bannerTheme = COLOR.bg.banner;
  const secondaryTheme = COLOR.bg.secondary;
  const transparentTheme = "transparent";

  const {
    children,
    width,
    height,
    margin,
    padding,
    borderRadius,
    theme,
    position,
    maxWidthTablet,
    widthTablet,
    maxWidthMobile,
    widthMobile,
  } = props;
  let themeColor = defaultTheme;

  switch (theme) {
    case "banner":
      themeColor = bannerTheme;
      break;
    case "secondary":
      themeColor = secondaryTheme;
      break;
    case "transparent":
      themeColor = transparentTheme;
      break;
    default:
      themeColor = defaultTheme;
  }

  return (
    <div
      css={css`
        width: ${width};
        height: ${height};
        padding: ${padding};
        margin: ${margin};
        padding: ${padding};
        border-radius: ${borderRadius};
        background: ${themeColor};
        position: ${position};
        display: flex;
        flex-direction: column;
        @media only screen and (max-width: ${maxWidthTablet}) {
          width: ${widthTablet};
        }
        @media only screen and (max-width: ${maxWidthMobile}) {
          width: ${widthMobile};
        }
      `}
    >
      {children}
    </div>
  );
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
