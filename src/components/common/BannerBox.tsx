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
  widthTablet?: string;
  widthMobile?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  padding: "1.5rem",
  borderRadius: "1.4rem",
  theme: "default",
  position: "static",
  widthTablet: "100%",
  widthMobile: "100%",
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
    widthTablet,
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
        @media only screen and (max-width: 1023px) {
          width: ${widthTablet};
        }
        @media only screen and (max-width: ${maxWidthMobile || "767px"}) {
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
