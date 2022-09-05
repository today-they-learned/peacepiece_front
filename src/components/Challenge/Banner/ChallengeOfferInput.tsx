import { useState } from "react";
import { FlexBox, FlexButton, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";
import ChallengeBanner from "../ChallengeBanner";

const script = {
  title: "🌱 챌린지 제안하기",
  text: "어떤 챌린지가 PeacePiece에서 열리면 좋을까요? 다양한 생각을 공유해주세요",
};

const Textarea = styled.textarea`
  width: 72rem !important;
  height: 15rem !important;
  border-radius: 1.25rem !important;
  border: none;
  padding: 1.25rem;
  font-size: 1rem;
  font-family: "Pr-Bold";
  color: white !important;
  background-color: ${COLOR.bg.secondary} !important;
  margin: 1rem 0 0 0;
`;

const ChallengeOfferInput = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <ChallengeBanner title={script.title} width="76rem">
      <Textarea id="text" onChange={(e) => setCnt(e.target.value.length)} />
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        margin="0.5rem 1rem"
        background={COLOR.bg.primary}
      >
        <FlexTextBox
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          color={COLOR.font.disabled}
        >
          글자 수 {cnt} / 100
        </FlexTextBox>
        <FlexButton
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          backgroundColor={COLOR.bg.banner}
          color={COLOR.font.default}
        >
          제안하기
        </FlexButton>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeOfferInput;
