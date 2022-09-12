import { useEffect, useState } from "react";
import { useMediaQuery, Paper } from "@mui/material";
import styled from "styled-components";
import COLOR from "constants/color";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FlexBox } from "components/common";
import { useChallengeWeeklyData } from "hooks/queries/challenge";
import { ChallengeType } from "types";
import { ChallengeBanner } from "components/Challenge";
import WeeklyChallengeCard from "./Card/WeeklyChallengeCard";

const CarouselLib = styled(Carousel)`
  width: calc(100% + 3rem);
  margin: 2.5rem -1.5rem 1rem -1.5rem;
`;

const Page = styled(Paper)`
  width: 100%;
  display: flex;
  border: none !important;
  background-color: ${COLOR.bg.primary} !important;
  box-shadow: none !important;
  padding: 0 3.5rem;

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
  }
`;

const arrLoop = (challenges: ChallengeType[]) => {
  const newArr = [];
  for (let i = 0; i <= challenges.length - 1; i += 2) {
    newArr.push(
      <Page key={`weekly_challenge_page_${i}`}>
        <FlexBox width="100%" gap="1.5rem">
          {i === challenges.length - 1 && challenges.length % 2 === 1 ? (
            <>
              <WeeklyChallengeCard challenge={challenges[i]} />
              <div style={{ flex: "1 1 0" }} />
            </>
          ) : (
            <>
              <WeeklyChallengeCard challenge={challenges[i]} />
              <WeeklyChallengeCard challenge={challenges[i + 1]} />
            </>
          )}
        </FlexBox>
      </Page>
    );
  }
  for (let i = 0; i <= challenges.length - 1; i += 2) {
    newArr.push(
      <Page key={`weekly_challenge_page_${i}`}>
        <FlexBox width="100%" gap="1.5rem">
          {i === challenges.length - 1 && challenges.length % 2 === 1 ? (
            <>
              <WeeklyChallengeCard challenge={challenges[i]} />
              <div style={{ flex: "1 1 0" }} />
            </>
          ) : (
            <>
              <WeeklyChallengeCard challenge={challenges[i]} />
              <WeeklyChallengeCard challenge={challenges[i + 1]} />
            </>
          )}
        </FlexBox>
      </Page>
    );
  }
  return newArr;
};

const arrLoopMobile = (challenges: ChallengeType[]) => {
  const newArr = [];
  for (let i = 0; i < challenges.length; i += 1) {
    newArr.push(
      <Page key={`weekly_challenge_page_${i}`}>
        <FlexBox width="100%">
          <WeeklyChallengeCard challenge={challenges[i]} />
        </FlexBox>
      </Page>
    );
  }
  return newArr;
};

const WeeklyChallengeList = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { data: challenges, isFetched } = useChallengeWeeklyData();
  const [insertCard, setInsertCard] = useState<JSX.Element[]>();

  useEffect(() => {
    if (isFetched) {
      setInsertCard(
        isDesktop ? arrLoop(challenges) : arrLoopMobile(challenges)
      );
    }
  }, [isFetched]);

  return (
    <ChallengeBanner title="📝 이번주 챌린지" width="100%" margin="0 0 3rem 0">
      <CarouselLib
        animation="slide"
        indicators={false}
        duration={1000}
        cycleNavigation={challenges?.length > 2}
        autoPlay={false}
        navButtonsAlwaysVisible={challenges?.length > 2}
        NextIcon={
          <ArrowForwardIosIcon fontSize={isDesktop ? "medium" : "small"} />
        }
        PrevIcon={
          <ArrowBackIosNewIcon fontSize={isDesktop ? "medium" : "small"} />
        }
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: COLOR.font.primary,
            borderRadius: 0,
          },
        }}
      >
        {insertCard}
      </CarouselLib>
    </ChallengeBanner>
  );
};

export default WeeklyChallengeList;
