import styled from "styled-components";
import COLOR from "constants/color";
import { BannerBox, FlexBox, FlexTextBox, FlexButton } from "components/common";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ChallengeType } from "types";
import { DidItIcon } from "components/Challenge";

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

interface Props {
  challenge: ChallengeType;
}

const ChallengeDetailBanner = ({ challenge }: Props) => {
  const len = challenge?.images?.length;
  const lenq = len / 3;
  const lenr = len % 3;
  const loopImg = () => {
    const newArr = [];
    for (let i = 0; i < lenq; i += 3) {
      newArr.push(
        <Page key={i}>
          <Img src={challenge?.images[i].file} alt="image1" />
          <Img src={challenge?.images[i + 1].file} alt="image2" />
          <Img src={challenge?.images[i + 2].file} alt="image3" />
        </Page>
      );
    }
    if (lenr === 1) {
      newArr.push(
        <Page key={len - 1}>
          <Img src={challenge?.images[len - 1].file} alt="image1" />
        </Page>
      );
    } else {
      newArr.push(
        <Page key={len - 2}>
          <Img src={challenge?.images[len - 2].file} alt="image1" />
          <Img src={challenge?.images[len - 1].file} alt="image1" />
        </Page>
      );
    }

    return newArr;
  };

  const loopBtn = () => {
    const newArr = [];
    for (let i = 0; i < challenge?.categories.length; i += 1) {
      newArr.push(
        <FlexButton
          key={i}
          backgroundColor={COLOR.bg.banner}
          margin="0 0.5rem 0 1.3rem"
          fontSize="1rem"
        >
          {challenge?.categories[i]}
        </FlexButton>
      );
    }
    return newArr;
  };
  const insertImg = loopImg();
  const insertBtn = loopBtn();

  return (
    <BannerBox width="52.25rem" padding="1rem">
      <Thumbnail src={challenge?.thumbnail.file} />
      <FlexBox alignItems="center" margin="1.5rem 0 0.5rem 1.3rem">
        {challenge?.end_at && (
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
          {challenge?.title}
        </FlexTextBox>
        {challenge?.is_proved && <DidItIcon />}
      </FlexBox>
      <FlexBox background="white" margin="1rem 0 1rem 0">
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
          이 챌린지에 참가하면 {challenge?.point} PP를 획득할 수 있어요! 벌써{" "}
          {challenge?.prover_cnt}
          명의 사람들이 함께했어요 😇
        </FlexTextBox>
      </FlexBox>
      <FlexTextBox margin="2rem">{challenge?.description}</FlexTextBox>
    </BannerBox>
  );
};

export default ChallengeDetailBanner;
