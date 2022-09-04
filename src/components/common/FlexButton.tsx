/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontFamily?: string;
  cursor?: string;
  color?: string;
  backgroundColor?: string;
  position?: string;
  right?: string;
  bottom?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  margin: "0",
  fontFamily: "Pr-SemiBold",
  borderRadius: "0.62rem",
  fontSize: "1.2rem",
  cursor: "pointer",
  color: "white",
  backgroundColor: "",
  position: "static",
  right: "0",
  bottom: "0",
  onClick: Function,
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
    position,
    right,
    bottom,
    onClick,
  } = props;

  return (
    <button
      onClick={onClick}
      css={css`
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
      `}
    >
      {children}
    </button>
  );
};
FlexButton.defaultProps = defaultProps;

export default FlexButton;
