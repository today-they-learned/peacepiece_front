/** @jsxImportSource @emotion/react */
import COLOR from "constants/color";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { css } from "@emotion/react";

interface Props {
  text: string;
  width?: string;
  minRow?: number;
  margin?: string;
  padding?: string;
  fontSize?: string;
  background?: string;
}

const defaultProps = {
  width: "45rem",
  minRow: 1,
  margin: "0",
  padding: "1.25rem",
  fontSize: "1.25rem",
  background: COLOR.bg.secondary,
};

const Textarea = ({
  text,
  width,
  minRow,
  margin,
  padding,
  fontSize,
  background,
}: Props) => {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder={text}
      minRows={minRow}
      css={css`
        width: ${width} !important;
        border-radius: 1.25rem !important;
        border: none;
        padding: ${padding};
        font-size: ${fontSize};
        font-family: "Pr-Bold";
        color: white !important;
        background-color: ${background} !important;
        margin: ${margin};
      `}
    />
  );
};
Textarea.defaultProps = defaultProps;

export default Textarea;
