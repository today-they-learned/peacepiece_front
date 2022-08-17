import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";

export interface Props {
  text: string;
  width?: string;
}

const defaultProps = {
  width: "auto",
};

const HoverTooltip = (props: Props) => {
  const { text, width } = props;

  const Tooltip = styled(ReactTooltip)`
    width: ${width};
    font-size: 13px;
    font-family: "Pr-Bold";
    background-color: black !important;
    text-align: center;
  `;

  return (
    <div style={{ padding: "20%" }}>
      <Icon
        name="question circle"
        size="large"
        color="grey"
        link
        data-tip="React-tooltip"
      />
      <Tooltip effect="solid">{text}</Tooltip>
    </div>
  );
};
HoverTooltip.defaultProps = defaultProps;

export default HoverTooltip;
