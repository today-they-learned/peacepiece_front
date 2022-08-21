import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import ChallengeTitle from "components/common/ChallengeTitle";

const WeeklyChallengeCard = () => {
  return (
    <BannerBox
      width="24rem"
      height="10.5rem"
      padding="1.5rem 2rem 1.5rem 2rem"
      borderRadius="1.8rem"
      backgroundColor={COLOR.bg.secondary}
    >
      <ChallengeTitle title="일회용컵 No! 텀블러 Yes!" />
      <FlexTextBox>
        일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!
      </FlexTextBox>
    </BannerBox>
  );
};

export default WeeklyChallengeCard;
