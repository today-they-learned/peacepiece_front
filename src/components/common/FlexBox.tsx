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
};

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
  } = props;

  const dir = (column ? "column" : "row") + (reverse ? "-reverse" : "");
  const Flexbox = styled.div`
    display: flex;
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: ${padding};
    box-shadow: ${shadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : ""};
    border-radius: ${borderRadius};
    flex-direction: ${dir};
    flex-wrap: ${wrap};
    justify-content: ${center ? "center" : justifyContent};
    align-items: ${center ? "center" : alignItems};
  `;

  return <Flexbox dir={dir}>{children}</Flexbox>;
};
FlexBox.defaultProps = defaultProps;

export default FlexBox;
