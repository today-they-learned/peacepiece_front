import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
  margin?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  fontSize: "1rem",
  fontFamily: "Pr-SemiBold",
  color: "white",
};

const FlexTextBox = (props: Props) => {
  const { children, width, height, margin, fontSize, fontFamily, color } =
    props;

  const FlexTextBox = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    padding: 0;
    font-size: ${fontSize};
    font-family: ${fontFamily};
    text-align: left;
    color: ${color};
  `;

  return <FlexTextBox>{children}</FlexTextBox>;
};
FlexTextBox.defaultProps = defaultProps;

export default FlexTextBox;
