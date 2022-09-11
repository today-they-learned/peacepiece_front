import { useEffect, useState } from "react";
import { useMediaQuery, Paper } from "@mui/material";
import styled from "styled-components";
import COLOR from "constants/color";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FlexTextBox, FlexBox } from "components/common";
import { useChallengeWeeklyData } from "hooks/queries/challenge";
import { ChallengeType } from "types";
import WeeklyChallengeCard from "./Card/WeeklyChallengeCard";

const Container = styled.div`
  width: 100%;
  height: 17.25rem;
  padding: 0.8rem;
  border-radius: 1.25rem;
  background-color: ${COLOR.bg.primary};
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const CarouselLib = styled(Carousel)`
  width: 100%;
  height: 10.5rem;
  margin: auto;
  background-color: ${COLOR.bg.primary};
  @media only screen and (max-width: 768px) {
    width: 27.5rem;
  }
`;

const Page = styled(Paper)`
  width: 100%;
  margin-left: 0.5rem;
  display: flex;
  border: none !important;
  background-color: ${COLOR.bg.primary} !important;
  box-shadow: none !important;

  @media only screen and (max-width: 768px) {
    width: 24rem;
    margin-left: 0.6rem;
  }
`;

const arrLoop = (challenges: ChallengeType[]) => {
  const newArr = [];
  for (let i = 0; i <= challenges.length - 1; i += 2) {
    newArr.push(
      <Page key={`weekly_challenge_page_${i}`}>
        {i === challenges.length - 1 && challenges.length % 2 === 1 ? (
          <FlexBox margin="1rem 0.5rem 0 1rem" background={COLOR.bg.primary}>
            <WeeklyChallengeCard challenge={challenges[i]} />
          </FlexBox>
        ) : (
          <>
            <FlexBox margin="1rem 0.5rem 0 3rem" background={COLOR.bg.primary}>
              <WeeklyChallengeCard challenge={challenges[i]} />
            </FlexBox>
            <FlexBox margin="1rem 1rem 0 0.5rem" background={COLOR.bg.primary}>
              <WeeklyChallengeCard challenge={challenges[i]} />
            </FlexBox>
          </>
        )}
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
        <FlexBox margin="0.5rem 0.5rem 0 2.5rem">
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
    <Container>
      <FlexTextBox fontSize="1.7rem" margin="1.4rem 0 2rem 2rem">
        📝 이번주 챌린지
      </FlexTextBox>
      <CarouselLib
        height="11rem"
        animation="slide"
        indicators={false}
        duration={1000}
        cycleNavigation={challenges?.length > 2}
        navButtonsAlwaysVisible={challenges?.length > 2}
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
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
    </Container>
  );
};

export default WeeklyChallengeList;
