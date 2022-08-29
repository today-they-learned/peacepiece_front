import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontFamily?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
  position?: string;
  right?: string;
  bottom?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  borderRadius: "0.3rem",
  fontSize: "0.8rem",
  fontFamily: "Pr-SemiBold",
  cursor: "pointer",
  color: "white",
  backgroundColor: "",
  position: "static",
  right: "0",
  bottom: "0",
};

const FlexButton = (props: Props) => {
  const {
    children,
    width,
    height,
    margin,
    borderRadius,
    fontSize,
    fontFamily,
    cursor,
    color,
    backgroundColor,
    position,
    right,
    bottom,
  } = props;

  const FlexButton = styled.button`
    width: ${width};
    height: ${height};
    margin: ${margin};
    border: 0;
    outline: 0;
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    font-family: ${fontFamily};
    background-color: ${backgroundColor};
    color: ${color};
    cursor: ${cursor ? "pointer" : cursor};
    position: ${position};
    right: ${right};
    bottom: ${bottom};
  `;

  return <FlexButton>{children}</FlexButton>;
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
