import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
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
  fontWeight: "bolder",
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
    fontWeight,
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
    font-weight: ${fontWeight};
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
