import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  position?: string;
  right?: string;
  bottom?: string;
  background?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  fontSize: "1rem",
  fontFamily: "Pr-SemiBold",
  color: "white",
  position: "static",
  right: "0",
  bottom: "0",
  background: "transparent",
};

const Container = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: 0;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  text-align: left;
  color: ${(props) => props.color};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  background: ${(props) => props.background};
`;

const FlexTextBox = (props: Props) => {
  const {
    children,
    width,
    height,
    margin,
    fontSize,
    fontFamily,
    color,
    position,
    right,
    bottom,
    background,
  } = props;

  return (
    <Container
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={color}
      position={position}
      right={right}
      bottom={bottom}
      background={background}
    >
      {children}
    </Container>
  );
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
