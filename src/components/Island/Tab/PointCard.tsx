import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { PointType } from "types";
import { styled as style } from "@mui/material/styles";
import * as TooltipLib from "@mui/material/Tooltip";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import styled from "styled-components";
import { useFromDate } from "hooks";

interface Props {
  point: PointType;
}

const Title = styled.a`
  font-family: "Pr-Bold";
  font-size: 1.05rem;
  max-width: 8.5rem;
  margin-right: 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const CustomTooltip = style(({ className, ...props }: TooltipProps) => (
  // eslint-disable-next-line react/jsx-pascal-case, react/jsx-props-no-spreading
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

const PointCard = ({ point }: Props) => {
  const dateFormatter = useFromDate;
  const title =
    point.category === "buy_item"
      ? `${point?.item?.name}`
      : `${point.challenge.title}`;

  const titleAction =
    // eslint-disable-next-line no-nested-ternary
    point.category === "buy_item"
      ? point.item.category === "animal"
        ? "입양"
        : "구매"
      : "인증";

  return (
    <FlexBox
      key={`point-log-${point.id}`}
      width="100%"
      height="auto"
      borderRadius="5px"
      background={COLOR.bg.navSecondary}
      padding="1rem"
      column
    >
      <FlexBox margin="0 0 0.6rem 0">
        <CustomTooltip title={title} arrow placement="top-start">
          <Title>{title}</Title>
        </CustomTooltip>
        <FlexTextBox fontFamily="Pr-Bold" fontSize="1.05rem">
          {titleAction}
        </FlexTextBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" width="100%">
        {point.amount > 0 ? (
          <FlexTextBox color={COLOR.font.primary} fontSize="1.1rem">
            +{point.amount} PP
          </FlexTextBox>
        ) : (
          <FlexTextBox color={COLOR.font.danger} fontSize="1.1rem">
            {point.amount} PP
          </FlexTextBox>
        )}
        <FlexTextBox fontSize="0.75rem">
          {dateFormatter(point.created_at)}
        </FlexTextBox>
      </FlexBox>
    </FlexBox>
  );
};

export default PointCard;
