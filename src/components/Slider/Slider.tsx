import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ChallengeOfferCard from "components/Card/ChallengeOfferCard";
import FlexBox from "components/common/FlexBox";

const Carousell = styled(Carousel)`
  padding: 1.4rem 1rem 1.4rem 1rem;
  margin-left: 5%;
  width: 52rem;
  height: 13rem;
  background-color: ${COLOR.bg.primary};
`;

const Page = styled(Paper)`
  width: 50rem;
  display: flex;
  border: none !important;
  background-color: ${COLOR.bg.primary} !important;
`;

const Slider = () => {
  const dummyData = [
    {
      userName: "soye1",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: true,
    },
    {
      userName: "soye2",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: false,
    },
    {
      userName: "soye3",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: false,
    },
    {
      userName: "soye4",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: true,
    },
    {
      userName: "soye5",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: true,
    },
    {
      userName: "soye6",
      content:
        "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
      like: 100,
      clicked: true,
    },
  ];

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
              <FlexBox margin="0 1rem 0 2rem">
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
  return (
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
      {arrLoop()}
    </Carousell>
  );
};

export default Slider;
