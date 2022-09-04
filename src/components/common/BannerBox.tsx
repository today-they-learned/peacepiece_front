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
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0 1rem 2rem 1rem",
  padding: "1.5rem",
  borderRadius: "1.4rem",
  theme: "default",
  position: "static",
};

const BannerBox = (props: Props) => {
  const defaultTheme = COLOR.bg.primary;
  const bannerTheme = COLOR.bg.banner;
  const secondaryTheme = COLOR.bg.secondary;

  const {
    children,
    width,
    height,
    margin,
    padding,
    borderRadius,
    theme,
    position,
  } = props;
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
      `}
    >
      {children}
    </div>
  );
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
