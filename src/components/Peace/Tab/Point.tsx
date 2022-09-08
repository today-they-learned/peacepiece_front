/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-pascal-case */
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { styled as style } from "@mui/material/styles";
import styled from "styled-components";
import * as TooltipLib from "@mui/material/Tooltip";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const dummyPoint = [
  {
    title: "오늘은 쓰레기를 한 개만 버려보자",
    isPlus: true,
    point: 10,
    date: "09-08 12:30",
  },
  {
    title: "섬 넓히기 1단계",
    isPlus: false,
    point: 10,
    date: "09-08 12:30",
  },
  {
    title: "재활용 습관 들이기",
    isPlus: true,
    point: 10,
    date: "09-08 12:30",
  },
];

const Title = styled.a`
  font-family: "Pr-Bold";
  font-size: 1.1rem;
  max-width: 9.5rem;
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

const insert = () => {
  const newArr = [];
  for (let i = 0; i < dummyPoint.length; i += 1) {
    newArr.push(
      <FlexBox
        width="280px"
        height="83px"
        borderRadius="5px"
        background={COLOR.bg.navSecondary}
        margin="0.3rem 0.3rem 0.5rem 0.3rem"
        padding="1rem"
        column
      >
        <FlexBox margin="0 0 0.6rem 0">
          <CustomTooltip
            title={dummyPoint[i].title}
            arrow
            placement="top-start"
          >
            <Title>{dummyPoint[i].title}</Title>
          </CustomTooltip>
          <FlexTextBox fontFamily="Pr-Bold" fontSize="1.1rem">
            챌린지 인증
          </FlexTextBox>
        </FlexBox>
        <FlexBox>
          {dummyPoint[i].isPlus ? (
            <FlexTextBox color={COLOR.font.primary} fontSize="1.1rem">
              +{dummyPoint[i].point}PP
            </FlexTextBox>
          ) : (
            <FlexTextBox color={COLOR.font.danger} fontSize="1.1rem">
              -{dummyPoint[i].point}PP
            </FlexTextBox>
          )}
          <FlexTextBox fontSize="0.75rem" margin="0 0 0 7.5rem">
            {dummyPoint[i].date}
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
    );
  }
  return newArr;
};

const Point = () => {
  return <>{insert()}</>;
};

export default Point;
