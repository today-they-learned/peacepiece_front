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

interface ContainerProps extends Props {
  themeColor: string;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.themeColor};
  position: ${(props) => props.position};
`;

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
    <Container
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      borderRadius={borderRadius}
      themeColor={themeColor}
      position={position}
    >
      {children}
    </Container>
  );
};
BannerBox.defaultProps = defaultProps;

export default BannerBox;
