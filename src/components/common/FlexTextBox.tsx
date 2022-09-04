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

  const FlexTextBox = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: 0;
    font-size: ${fontSize};
    font-family: ${fontFamily};
    text-align: left;
    color: ${color};
    position: ${position};
    right: ${right};
    bottom: ${bottom};
    background: ${background};
  `;

  return <FlexTextBox>{children}</FlexTextBox>;
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
