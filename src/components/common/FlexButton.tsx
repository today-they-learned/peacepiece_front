import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
}

const defaultProps = {
  margin: "0",
  borderRadius: "0.62rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "white",
  backgroundColor: "",
};

const FlexButton = (props: Props) => {
  const {
    children,
    margin,
    borderRadius,
    fontSize,
    cursor,
    color,
    backgroundColor,
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
    background-color: ${backgroundColor};
    color: ${color};
    cursor: ${cursor ? "pointer" : cursor};
    font-family: "Pr-SemiBold";
  `;

  return <FlexButton>{children}</FlexButton>;
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
