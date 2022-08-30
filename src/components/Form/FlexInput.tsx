import styled from "styled-components";
import COLOR from "constants/color";
import TextareaAutosize from "@mui/base/TextareaAutosize";

interface Props {
  text: string;
  width?: string;
  minRow?: number;
}

const defaultProps = {
  width: "45rem",
  minRow: 1,
};

const FlexInput = ({ text, width, minRow }: Props) => {
  const Textarea = styled(TextareaAutosize)`
    width: ${width} !important;
    border-radius: 1.25rem !important;
    border: none;
    padding: 1.25rem;
    font-size: 1.25rem;
    font-family: "Pr-Bold";
    color: white !important;
    background-color: ${COLOR.bg.secondary};
  `;

  return (
    <Textarea aria-label="empty textarea" placeholder={text} minRows={minRow} />
  );
};
FlexInput.defaultProps = defaultProps;

export default FlexInput;
