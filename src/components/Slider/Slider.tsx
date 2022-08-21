import React from "react";
import { useMediaQuery, Paper } from "@mui/material";
import styled from "styled-components";
import COLOR from "constants/color";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChallengeOfferCard from "components/Card/ChallengeOfferCard";
import FlexBox from "components/common/FlexBox";
import dummyData from "./dummyData";

const Container = styled.div`
  width: 54rem;
  height: 18.5rem;
  padding: 1rem;
  border-radius: 1.4rem;
  background-color: ${COLOR.bg.primary};
  @media only screen and (max-width: 768px) {
    width: 30rem;
  }
`;

const Carousell = styled(Carousel)`
  width: 51.5rem;
  height: 10.5rem;
  background-color: ${COLOR.bg.primary};
  @media only screen and (max-width: 768px) {
    width: 28rem;
  }
`;

const Title = styled.div`
  width: 20rem;
  margin: 1.5rem 0 1.5rem 0;
  height: 2rem;
  font-size: 1.7rem;
  font-family: "Pr-Bold";
  color: white;
`;

const Page = styled(Paper)`
  width: 49rem;
  margin-left: 1rem;
  display: flex;
  border: none !important;
  background-color: ${COLOR.bg.primary} !important;
  @media only screen and (max-width: 768px) {
    width: 24rem;
    margin-left: 1rem;
  }
`;

const Slider = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const arrLoop = () => {
    const newArr = [];
    for (let i = 0; i <= dummyData.length - 1; i += 2) {
      newArr.push(
        <Page>
          {i === dummyData.length - 1 && dummyData.length % 2 === 1 ? (
            <FlexBox margin="0 1rem 0 1rem">
              <ChallengeOfferCard
                userName={dummyData[i].userName}
                content={dummyData[i].content}
                like={dummyData[i].like}
                clicked={dummyData[i].clicked}
              />
            </FlexBox>
          ) : (
            <>
              <FlexBox margin="0 0.5rem 0 2rem">
                <ChallengeOfferCard
                  userName={dummyData[i].userName}
                  content={dummyData[i].content}
                  like={dummyData[i].like}
                  clicked={dummyData[i].clicked}
                />
              </FlexBox>
              <FlexBox margin="0 1rem 0 1rem">
                <ChallengeOfferCard
                  userName={dummyData[i + 1].userName}
                  content={dummyData[i + 1].content}
                  like={dummyData[i + 1].like}
                  clicked={dummyData[i + 1].clicked}
                />
              </FlexBox>
            </>
          )}
        </Page>
      );
    }
    return newArr;
  };

  const arrLoopMobile = () => {
    const newArr = [];
    for (let i = 0; i < dummyData.length; i += 1) {
      newArr.push(
        <Page>
          <FlexBox margin="0 0.5rem 0 2rem">
            <ChallengeOfferCard
              userName={dummyData[i].userName}
              content={dummyData[i].content}
              like={dummyData[i].like}
              clicked={dummyData[i].clicked}
            />
          </FlexBox>
        </Page>
      );
    }
    return newArr;
  };

  const insertData = isDesktop ? arrLoop() : arrLoopMobile();

  return (
    <Container>
      <Title>📝 이번주 챌린지</Title>
      <Carousell
        height="11rem"
        animation="slide"
        indicators={false}
        cycleNavigation
        navButtonsAlwaysVisible
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
        {insertData}
      </Carousell>
    </Container>
  );
};

export default Slider;
