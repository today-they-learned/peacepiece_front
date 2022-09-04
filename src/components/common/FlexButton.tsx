import { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontFamily?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: MouseEventHandler | undefined;
  position?: string;
  right?: string;
  bottom?: string;
}

const defaultProps = {
  margin: "0",
  fontFamily: "Pr-SemiBold",
  borderRadius: "0.62rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "white",
  backgroundColor: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  position: "static",
  right: "0",
  bottom: "0",
};

const Button = styled.button<Props>`
  width: auto;
  height: auto;
  padding: 0.6rem 1.5rem;
  margin: ${(props) => props.margin};
  border: 0;
  outline: 0;
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: ${(props) => (props.cursor ? "pointer" : props.cursor)};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

const FlexButton = (props: Props) => {
  const {
    children,
    margin,
    borderRadius,
    fontSize,
    fontFamily,
    cursor,
    color,
    backgroundColor,
    onClick,
    position,
    right,
    bottom,
  } = props;

  return (
    <Button
      onClick={onClick}
      margin={margin}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontFamily={fontFamily}
      cursor={cursor}
      color={color}
      backgroundColor={backgroundColor}
      position={position}
      right={right}
      bottom={bottom}
    >
      {children}
    </Button>
  );
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
