/** @jsxImportSource @emotion/react */
import COLOR from "constants/color";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { css } from "@emotion/react";

interface Props {
  text: string;
  width?: string;
  minRow?: number;
  margin?: string;
}

const defaultProps = {
  width: "45rem",
  minRow: 1,
  margin: "0",
};

const Textarea = ({ text, width, minRow, margin }: Props) => {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder={text}
      minRows={minRow}
      css={css`
        width: ${width} !important;
        border-radius: 1.25rem !important;
        border: none;
        padding: 1.25rem;
        font-size: 1.25rem;
        font-family: "Pr-Bold";
        color: white !important;
        background-color: ${COLOR.bg.secondary};
        margin: ${margin};
      `}
    />
  );
};
Textarea.defaultProps = defaultProps;

export default Textarea;
