import { useMediaQuery, Paper } from "@mui/material";
import styled from "styled-components";
import COLOR from "constants/color";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChallengeOfferCard from "components/Challenge/Card/ChallengeOfferCard";
import FlexBox from "components/common/FlexBox";
import { FlexTextBox } from "components/common";
import dummyData from "./dummyData";

const Container = styled.div`
  width: 52rem;
  height: 17.25rem;
  padding: 0.8rem;
  border-radius: 1.25rem;
  background-color: ${COLOR.bg.primary};
  @media only screen and (max-width: 768px) {
    width: 28rem;
    padding-left: 0;
  }
`;

const CarouselLib = styled(Carousel)`
  width: 50.5rem;
  height: 10.5rem;
  background-color: ${COLOR.bg.primary};
  @media only screen and (max-width: 768px) {
    width: 27.5rem;
  }
`;

const Page = styled(Paper)`
  width: 49rem;
  margin-left: 0.5rem;
  display: flex;
  border: none !important;
  background-color: ${COLOR.bg.primary} !important;
  @media only screen and (max-width: 768px) {
    width: 24rem;
    margin-left: 0.6rem;
  }
`;

const arrLoop = () => {
  const newArr = [];
  for (let i = 0; i <= dummyData.length - 1; i += 2) {
    newArr.push(
      <Page>
        {i === dummyData.length - 1 && dummyData.length % 2 === 1 ? (
          <FlexBox margin="0 0.8rem 0 0.8rem">
            <ChallengeOfferCard
              userName={dummyData[i].userName}
              content={dummyData[i].content}
              like={dummyData[i].like}
              clicked={dummyData[i].clicked}
            />
          </FlexBox>
        ) : (
          <>
            <FlexBox margin="0 0.5rem 0 2.2rem">
              <ChallengeOfferCard
                userName={dummyData[i].userName}
                content={dummyData[i].content}
                like={dummyData[i].like}
                clicked={dummyData[i].clicked}
              />
            </FlexBox>
            <FlexBox margin="0 1rem 0 0.5rem">
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

const Slider = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const insertCard = isDesktop ? arrLoop() : arrLoopMobile();

  return (
    <Container>
      <FlexTextBox fontSize="1.7rem" margin="1.4rem 0 1.4rem 0.8rem">
        📝 이번주 챌린지
      </FlexTextBox>
      <CarouselLib
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
        {insertCard}
      </CarouselLib>
    </Container>
  );
};

export default Slider;
