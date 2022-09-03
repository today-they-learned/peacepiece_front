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
  // onclick 타입은 React.MouseEventHandler<HTMLButtonElement>가 맞는데 default를 모르겠습니다.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
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
  onClick: "",
  position: "static",
  right: "0",
  bottom: "0",
};

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

  const FlexButton = styled.button`
    width: auto;
    height: auto;
    padding: 0.6rem 1.5rem;
    margin: ${margin};
    border: 0;
    outline: 0;
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    font-family: ${fontFamily};
    background: ${backgroundColor};
    color: ${color};
    cursor: ${cursor ? "pointer" : cursor};
    position: ${position};
    right: ${right};
    bottom: ${bottom};
  `;

  return <FlexButton onClick={onClick}>{children}</FlexButton>;
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
