import styled from "styled-components";
import COLOR from "constants/color";
import { BannerBox, FlexBox, FlexTextBox, FlexButton } from "components/common";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { DidItIcon } from "..";

const dummyData = {
  title: "일회용품 No! 다시 쓰기 Yes",
  description:
    "여기는 챌린지 description이 들어가는 자리입니다. 이 챌린지는 블라블라 ~~~~ 이 챌린지는 블라블라 ~~~~ 이 챌린지는 블라블라 ~~~~ 이 챌린지 블라블라 ~~~~이 챌린지는 블라블라 ~~~~이 챌린지는 블라블라 ~~~~이 챌린지는 블라블라 ~~~~이 챌린지는 블라블라 ~~~~",
  categories: ["일회용품_줄이기", "재활용_캠페인"],
  images: ["/images/image1.png", "/images/image2.png", "/images/image3.png"],
  prover_cnt: 34,
  point: 100,
  userDone: true,
  ended: true,
};

const Thumbnail = styled.img`
  width: 47.5rem;
  height: 16.5rem;
  margin: 1rem 0 0 1.3rem;
`;

const Img = styled.img`
  width: 13rem;
  height: 9.3rem;
  margin: 1rem;
`;

const CarouselLib = styled(Carousel)`
  width: 50.5rem;
  height: 10.5rem;
  background-color: ${COLOR.bg.primary};
`;

const Page = styled(Paper)`
  width: 49rem;
  margin-left: 0.5rem;
  display: flex;
  border: none !important;
  padding: 0 2rem 0 2rem;
  background-color: ${COLOR.bg.primary} !important;
`;

const loopImg = () => {
  const newArr = [];
  for (let i = 0; i < dummyData.images.length; i += 3) {
    newArr.push(
      <Page key={i}>
        <Img src={dummyData.images[i]} alt="image1" />
        <Img src={dummyData.images[i + 1]} alt="image2" />
        <Img src={dummyData.images[i + 2]} alt="image3" />
      </Page>
    );
  }
  return newArr;
};

const loopBtn = () => {
  const newArr = [];
  for (let i = 0; i < dummyData.categories.length; i += 1) {
    newArr.push(
      <FlexButton
        key={i}
        backgroundColor={COLOR.bg.banner}
        margin="0 0.5rem 0 1.3rem"
        fontSize="1rem"
      >
        {dummyData.categories[i]}
      </FlexButton>
    );
  }
  return newArr;
};

const ChallengeDetailBanner = () => {
  const insertImg = loopImg();
  const insertBtn = loopBtn();
  return (
    <BannerBox width="52.25rem" padding="1rem">
      <Thumbnail src="/images/thumbnail.png" />
      <FlexBox alignItems="center" margin="1.5rem 0 0.5rem 1.3rem">
        {dummyData.ended && (
          <FlexTextBox
            fontSize="1.56rem"
            fontFamily="Pr-SemiBold"
            color={COLOR.font.info}
            margin="0 0.5rem 0 0"
          >
            [종료]
          </FlexTextBox>
        )}
        <FlexTextBox fontSize="1.8rem" fontFamily="Pr-Bold" margin="0 1rem 0 0">
          {dummyData.title}
        </FlexTextBox>
        {dummyData.userDone && <DidItIcon />}
      </FlexBox>
      <FlexBox background="transparent" margin="1rem 0 1rem 0">
        {insertBtn}
      </FlexBox>
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
        {insertImg}
      </CarouselLib>
      <FlexBox
        width="44rem"
        height="3rem"
        padding="0.7rem 3rem 0.7rem 3rem"
        margin="1rem 2.5rem 0 3rem"
        borderRadius="10px"
        background={COLOR.bg.banner}
      >
        <FlexTextBox>
          이 챌린지에 참가하면 {dummyData.point} PP를 획득할 수 있어요! 벌써{" "}
          {dummyData.prover_cnt}
          명의 사람들이 함께했어요 😇
        </FlexTextBox>
      </FlexBox>
      <FlexTextBox margin="2rem">{dummyData.description}</FlexTextBox>
    </BannerBox>
  );
};

export default ChallengeDetailBanner;
