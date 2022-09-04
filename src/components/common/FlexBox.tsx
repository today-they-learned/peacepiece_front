import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
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
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  float?: string;
  transform?: string;
}

const defaultProps = {
  width: "auto",
  maxWidth: "none",
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
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  float: "none",
  transform: "none",
};

const FlexBox = (props: Props) => {
  const {
    children,
    width,
    maxWidth,
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
    top,
    left,
    right,
    bottom,
    float,
    transform,
  } = props;

  const dir = (column ? "column" : "row") + (reverse ? "-reverse" : "");
  const Flexbox = styled.div`
    display: flex;
    width: ${width};
    max-width: ${maxWidth};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    box-shadow: ${shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : ""};
    border-radius: ${borderRadius};
    flex-direction: ${dir};
    flex-wrap: ${wrap};
    justify-content: ${center ? "center" : justifyContent};
    align-items: ${center ? "center" : alignItems};
    background: ${background};
    position: ${position};
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    float: ${float};
    transform: ${transform};
  `;

  return <Flexbox dir={dir}>{children}</Flexbox>;
};
FlexBox.defaultProps = defaultProps;

export default FlexBox;
