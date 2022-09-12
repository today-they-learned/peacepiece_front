import styled from "styled-components";
import COLOR from "constants/color";
import { BannerBox, FlexBox, FlexTextBox } from "components/common";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ChallengeType } from "types";
import { DidItIcon } from "components/Challenge";

const Thumbnail = styled.img`
  width: auto;
  max-width: 100%;
  height: 16.5rem;
  object-fit: cover;
  margin: 1rem;
  border-radius: 1rem;
`;

const Img = styled.img`
  flex: 1 1 calc((100% - 2rem) / 3);
  max-width: calc((100% - 2rem) / 3);
  max-height: 8.5rem;
  width: 11rem;
  height: 8.5rem;
  object-fit: cover;
  border-radius: 0.625rem;
  object-fit: cover;
`;

const CarouselLib = styled(Carousel)`
  width: auto;
  max-width: 100%;
  height: 10.5rem;
  background-color: ${COLOR.bg.primary};
`;

const Page = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  display: flex;
  border: none !important;
  gap: 1rem;
  padding: 1rem 3.5rem;
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
          <Img src={challenge?.images[i]?.file} alt="image1" />
          <Img src={challenge?.images[i + 1]?.file} alt="image2" />
          <Img src={challenge?.images[i + 2]?.file} alt="image3" />
        </Page>
      );
    }
    if (lenr === 1) {
      newArr.push(
        <Page key={len - 1}>
          <Img src={challenge?.images[len - 1]?.file} alt="image1" />
        </Page>
      );
    } else {
      newArr.push(
        <Page key={len - 2}>
          <Img src={challenge?.images[len - 2]?.file} alt="image1" />
          <Img src={challenge?.images[len - 1]?.file} alt="image1" />
        </Page>
      );
    }
    for (let i = 0; i < lenq; i += 3) {
      newArr.push(
        <Page key={i}>
          <Img src={challenge?.images[i]?.file} alt="image1" />
          <Img src={challenge?.images[i + 1]?.file} alt="image2" />
          <Img src={challenge?.images[i + 2]?.file} alt="image3" />
        </Page>
      );
    }
    if (lenr === 1) {
      newArr.push(
        <Page key={len - 1}>
          <Img src={challenge?.images[len - 1]?.file} alt="image1" />
        </Page>
      );
    } else {
      newArr.push(
        <Page key={len - 2}>
          <Img src={challenge?.images[len - 2]?.file} alt="image1" />
          <Img src={challenge?.images[len - 1]?.file} alt="image1" />
        </Page>
      );
    }

    return newArr.reverse();
  };

  const insertImg = loopImg();

  return (
    <BannerBox width="100%" padding="1rem">
      <Thumbnail src={challenge?.thumbnail?.file} />
      <FlexBox alignItems="center" padding="1rem">
        {challenge?.is_ended && (
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
      {challenge?.categories && (
        <FlexBox background="transparent" padding="1rem">
          {challenge?.categories.map((category) => (
            <FlexBox
              key={`challenge-category-${category.id}`}
              background={COLOR.bg.banner}
              padding="0.3rem 1rem"
              borderRadius="0.3rem"
              margin="0 1rem 0 0.2rem"
            >
              <FlexTextBox fontSize="1rem">{category.title}</FlexTextBox>
            </FlexBox>
          ))}
        </FlexBox>
      )}
      <CarouselLib
        height="11rem"
        animation="slide"
        indicators={false}
        cycleNavigation
        navButtonsAlwaysVisible
        duration={1000}
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
      <FlexBox padding="1rem" width="100%">
        <FlexBox
          width="100%"
          padding="1rem"
          borderRadius="10px"
          background={COLOR.bg.banner}
          center
        >
          <FlexTextBox>
            이 챌린지에 참가하면 {challenge?.point} PP를 획득할 수 있어요! 벌써{" "}
            {challenge?.prover_cnt}
            명의 사람들이 함께했어요 😇
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
      <FlexTextBox margin="2rem">{challenge?.description}</FlexTextBox>
    </BannerBox>
  );
};

export default ChallengeDetailBanner;
