/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  mobileFontSize?: string;
  fontFamily?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
  position?: string;
  right?: string;
  bottom?: string;
  disabled?: boolean;
  top?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  type: "button",
  margin: "0",
  padding: "0.6rem 1.5rem",
  fontFamily: "Pr-SemiBold",
  borderRadius: "0.62rem",
  fontSize: "1.2rem",
  mobileFontSize: "",
  cursor: "pointer",
  color: "white",
  backgroundColor: "",
  position: "static",
  right: "",
  bottom: "",
  disabled: false,
  top: "",
  onClick: Function,
};

const FlexButton = (props: Props) => {
  const {
    children,
    type,
    disabled,
    margin,
    padding,
    borderRadius,
    fontSize,
    mobileFontSize,
    fontFamily,
    cursor,
    color,
    backgroundColor,
    position,
    bottom,
    right,
    top,
    onClick,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      css={css`
        width: auto;
        height: auto;
        padding: ${padding};
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
        top: ${top};

        @media only screen and (max-width: 768px) {
          font-size: ${mobileFontSize};
        }
        top: ${top};
      `}
    >
      {children}
    </button>
  );
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
