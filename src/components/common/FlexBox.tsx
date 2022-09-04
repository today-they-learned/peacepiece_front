import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  shadow?: boolean;
  borderRadius?: string;
  column?: boolean;
  reverse?: boolean;
  wrap?: string;
  justifyContent?: string;
  alignItems?: string;
  center?: boolean;
  background?: string;
  position?: string;
  right?: string;
  bottom?: string;
  gap?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  padding: "0",
  shadow: false,
  borderRadius: "",
  column: false,
  reverse: false,
  wrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  center: false,
  position: "static",
  background: "transparent",
  right: "0",
  bottom: "0",
  gap: "0",
};

const Flexbox = styled.div<Props>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) =>
    props.shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : ""};
  border-radius: ${(props) => props.borderRadius};
  flex-direction: ${(props) => props.dir};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) =>
    props.center ? "center" : props.justifyContent};
  align-items: ${(props) => (props.center ? "center" : props.alignItems)};
  background: ${(props) => props.background};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  gap: ${(props) => props.gap};
`;

const FlexBox = (props: Props) => {
  const {
    children,
    width,
    height,
    margin,
    padding,
    shadow,
    borderRadius,
    column,
    reverse,
    wrap,
    justifyContent,
    alignItems,
    center,
    background,
    position,
    right,
    bottom,
    gap,
  } = props;

  const dir = (column ? "column" : "row") + (reverse ? "-reverse" : "");

  return (
    <Flexbox
      dir={dir}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      shadow={shadow}
      borderRadius={borderRadius}
      wrap={wrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      center={center}
      background={background}
      position={position}
      right={right}
      bottom={bottom}
      gap={gap}
    >
      {children}
    </Flexbox>
  );
};
FlexBox.defaultProps = defaultProps;

export default FlexBox;
