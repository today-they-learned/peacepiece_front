/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-pascal-case */
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { styled as style } from "@mui/material/styles";
import styled from "styled-components";
import * as TooltipLib from "@mui/material/Tooltip";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

type point = {
  title: string;
  point: number;
  date: string;
};

const dummyPoints: point[] = [
  {
    title: "오늘은 쓰레기를 한 개만 버려보자",
    point: 10,
    date: "09-08 12:30",
  },
  {
    title: "섬 넓히기 1단계",
    point: -10,
    date: "09-08 12:30",
  },
  {
    title: "재활용 습관 들이기",
    point: 10,
    date: "09-08 12:30",
  },
];

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

const insertJSX = (points: point[]) => {
  const newArr = [];
  for (let i = 0; i < dummyPoints.length; i += 1) {
    newArr.push(
      <FlexBox
        width="260px"
        height="83px"
        borderRadius="5px"
        background={COLOR.bg.navSecondary}
        margin="0.6rem 0"
        padding="1rem"
        column
      >
        <FlexBox margin="0 0 0.6rem 0">
          <CustomTooltip title={points[i].title} arrow placement="top-start">
            <Title>{points[i].title}</Title>
          </CustomTooltip>
          <FlexTextBox fontFamily="Pr-Bold" fontSize="1.05rem">
            챌린지 인증
          </FlexTextBox>
        </FlexBox>
        <FlexBox>
          {points[i].point > 0 ? (
            <FlexTextBox color={COLOR.font.primary} fontSize="1.1rem">
              +{points[i].point} PP
            </FlexTextBox>
          ) : (
            <FlexTextBox color={COLOR.font.danger} fontSize="1.1rem">
              {points[i].point} PP
            </FlexTextBox>
          )}
          <FlexTextBox fontSize="0.75rem" margin="0 0 0 6rem">
            {points[i].date}
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
    );
  }
  return newArr;
};

const Point = () => {
  return <>{insertJSX(dummyPoints)}</>;
};

export default Point;
