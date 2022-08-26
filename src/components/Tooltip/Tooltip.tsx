/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-props-no-spreading */

import { styled } from "@mui/material/styles";
import COLOR from "constants/color";
import HelpIcon from "@mui/icons-material/Help";
import * as TooltipLib from "@mui/material/Tooltip";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export interface Props {
  text?: string;
  margin?: string;
}

const defaultProps = {
  text: "text를 props로 전달하세요.",
  margin: "0",
};

const Icon = styled(HelpIcon)<Props>`
  font-size: 1.8rem !important;
  margin: ${(props) => props.margin};
  cursor: pointer;
  color: ${COLOR.btn.tooltip};
`;

const Tooltip = (props: Props) => {
  const { text, margin } = props;
  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <TooltipLib.default {...props} arrow classes={{ popper: className }} />
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
      <Icon color="action" margin={margin} />
    </CustomTooltip>
  );
};
Tooltip.defaultProps = defaultProps;
export default Tooltip;
