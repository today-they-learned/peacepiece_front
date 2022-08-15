import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import HoverTooltip from "components/Tooltip/Tooltip";
import FlexButton from "components/common/FlexButton";
import FlexBox from "components/common/FlexBox";

const Container = styled.div`
  width: 24.5rem;
  height: 12rem;
  margin-top: 2.2rem;
  padding: 1.2rem 0 1.5rem 1rem;
  border-radius: 1.8rem;
  background-color: ${COLOR.bg.secondary};
`;

const Title = styled.div`
  position: relative;
  margin-top: 0.4rem;
`;

const Label = styled.label`
  font-family: "Pr-Bold";
  font-size: 1.7rem;
  color: ${COLOR.font.primary};
`;

const NoticKeyword = () => {
  const [keywords] = useState([
    "일회용품_안_쓰기",
    "텀블러",
    "이_세상에는_다시_쓸_수_있는_물건이_많다",
  ]);

  return (
    <BannerBox
      width="27rem"
      height="20rem"
      padding="1.8rem 1.2rem 1.8rem 1.2rem"
      margin="5%"
    >
      <Title>
        <Label style={{ marginLeft: "0.5rem", color: COLOR.font.primary }}>
          권소예
        </Label>
        <Label style={{ color: COLOR.white }}>님의 알림 키워드</Label>
        <HoverTooltip top="-3.5rem" left="15.5rem" width="17rem" height="5rem">
          알림 설정을 한 키워드의 챌린지가 올라왔을 때, 이메일로 알려드릴게요 😇
        </HoverTooltip>
      </Title>
      <Container>
        <FlexButton margin="0 0 0 16rem" fontSize="15px" fontWeight="400">
          수정하기{">"}
        </FlexButton>
        <FlexBox margin="0.5rem" wrap="wrap">
          {keywords.map((keyword: string) => (
            <FlexTextBox
              key={keyword}
              height="18px"
              margin="0 1rem 1rem 0"
              fontSize="17px"
            >
              {keyword}
            </FlexTextBox>
          ))}
        </FlexBox>
      </Container>
    </BannerBox>
  );
};

export default NoticKeyword;
