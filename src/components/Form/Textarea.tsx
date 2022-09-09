/** @jsxImportSource @emotion/react */
import COLOR from "constants/color";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { css } from "@emotion/react";

interface Props {
  text: string;
  width?: string;
  mobileWidth?: string;
  minRow?: number;
  margin?: string;
  padding?: string;
  fontSize?: string;
  background?: string;
  maxLength?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const defaultProps = {
  width: "45rem",
  mobileWidth: "100%",
  minRow: 1,
  margin: "0",
  padding: "1.25rem",
  fontSize: "1.25rem",
  background: COLOR.bg.secondary,
  maxLength: 900000,
};

const Textarea = (props: Props) => {
  const {
    text,
    width,
    mobileWidth,
    minRow,
    margin,
    padding,
    fontSize,
    background,
    maxLength,
    value,
    onChange,
  } = props;

  // 글자수 제한 props로 길이 받아서 처리

  return (
    <TextareaAutosize
      value={value}
      onChange={onChange}
      aria-label="empty textarea"
      placeholder={text}
      minRows={minRow}
      maxLength={maxLength}
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
        resize: none;

        @media only screen and (max-width: 767px) {
          width: ${mobileWidth} !important;
        }
      `}
    />
  );
};
Textarea.defaultProps = defaultProps;

export default Textarea;
