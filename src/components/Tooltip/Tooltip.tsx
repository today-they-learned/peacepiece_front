/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { styled } from "@mui/material/styles";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export interface Props {
  text: string;
}

const Icon = styled(HelpIcon)`
  font-size: 1.8rem !important;
  cursor: pointer;
`;

const HoverTooltip = (props: Props) => {
  const { text } = props;

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: 13,
      fontFamily: "Pr-Bold",
      paddingTop: 8,
      paddingRight: 15,
      paddingBottom: 8,
      paddingLeft: 15,
    },
  }));
  return (
    <CustomTooltip title={text} arrow placement="top-start">
      <Icon color="action" />
    </CustomTooltip>
  );
};

export default HoverTooltip;
