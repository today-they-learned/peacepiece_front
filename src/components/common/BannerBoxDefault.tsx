import React from "react";
import COLOR from "constants/color";
import styled from "styled-components";

interface Props {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

const defaultProps = {
  width: "auto",
  height: "auto",
  margin: "0",
  borderRadius: "1.4rem",
};

const BannerBoxDefault = (props: Props) => {
  const { width, height, margin, borderRadius } = props;

  const BannerBox = styled.div`
    width: ${width};
    height: ${height};
    margin: ${margin};
    border-radius: ${borderRadius};
    background-color: ${COLOR.bg.default};
  `;

  return <BannerBox />;
};
BannerBoxDefault.defaultProps = defaultProps;

export default BannerBoxDefault;
