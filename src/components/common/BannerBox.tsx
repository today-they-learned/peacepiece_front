import COLOR from "constants/color";
import styled from "styled-components";

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

  const BannerBox = styled.div`
    width: ${width};
    height: ${height};
    padding: ${padding};
    margin: ${margin};
    padding: ${padding};
    border-radius: ${borderRadius};
    background: ${themeColor};
    position: ${position};
  `;

  return <BannerBox>{children}</BannerBox>;
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
