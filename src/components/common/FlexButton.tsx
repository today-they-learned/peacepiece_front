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
  // onclick 타입은 React.MouseEventHandler<HTMLButtonElement>가 맞는데 default를 모르겠습니다.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
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
  onClick: "",
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
    onClick,
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
  `;

  return <FlexButton onClick={onClick}>{children}</FlexButton>;
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
