import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";

const Container = styled.div`
  width: 23rem;
  height: 10.5rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  border-radius: 1.8rem;
  background-color: ${COLOR.bg.secondary};
`;

const Title = styled.div`
  font-family: "Pr-SemiBold";
  font-size: 1.5rem;
  color: ${COLOR.font.primary};
`;

const WeeklyChallengeCard = () => {
  return (
    <Container>
      <Title>일회용컵 No! 텀블러 Yes!</Title>
      <FlexTextBox>
        일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!
      </FlexTextBox>
    </Container>
  );
};

export default WeeklyChallengeCard;
