import styled from "styled-components";
import COLOR from "constants/color";
import TextareaAutosize from "@mui/base/TextareaAutosize";

interface Props {
  text: string;
  width?: string;
  fontSize?: string;
  minRow?: number;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
}

const defaultProps = {
  width: "45rem",
  fontSize: "1.25rem",
  minRow: 1,
  margin: "0",
  padding: "1.2rem",
  backgroundColor: COLOR.bg.secondary,
};

const Input = ({
  text,
  width,
  fontSize,
  minRow,
  margin,
  backgroundColor,
  padding,
}: Props) => {
  const TextArea = styled(TextareaAutosize)`
    width: ${width} !important;
    border-radius: 1.25rem !important;
    border: none;
    padding: ${padding};
    font-size: ${fontSize};
    font-family: "Pr-Bold";
    color: white !important;
    background-color: ${backgroundColor};
    margin: ${margin};
  `;

  return (
    <TextArea aria-label="empty textarea" placeholder={text} minRows={minRow} />
  );
};
Input.defaultProps = defaultProps;

export default Input;
