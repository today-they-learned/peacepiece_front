import COLOR from "constants/color";
import { FlexBox, FlexTextBox, FlexButton } from "components/common";
import styled from "styled-components";

const dummyData = [
  {
    stage: 1,
    point: 100,
    BtnState: "isBuyed",
  },
  {
    stage: 2,
    point: 110,
    BtnState: "buyable",
  },
  {
    stage: 3,
    point: 120,
    BtnState: "isLocked",
  },
];

const Img = styled.div`
  width: 65px;
  height: 65px;
  margin: 0.75rem 0.25rem 0.75rem 0.75rem;
  border-radius: 5px;
  background: #d9d9d9;
`;

const insertJSX = () => {
  const newArr = [];
  for (let i = 0; i < dummyData.length; i += 1) {
    newArr.push(
      <FlexBox
        width="260px"
        height="90px"
        background={COLOR.bg.navSecondary}
        margin="0 0 0.6rem 0"
        borderRadius="5px"
      >
        <Img />
        <FlexBox background="transparent" column>
          <FlexBox background="transparent" margin="0.8rem">
            <FlexTextBox fontSize="1.05rem">
              섬 확장 {dummyData[i].stage}단계
            </FlexTextBox>
            <FlexTextBox
              fontSize="1.05rem"
              color={COLOR.font.primary}
              margin="0 0 0 0.5rem"
            >
              {dummyData[i].point}PP
            </FlexTextBox>
          </FlexBox>
          {dummyData[i].BtnState === "isBuyed" && (
            <FlexButton
              backgroundColor="#3F7D4D"
              fontSize="0.9rem"
              padding="0.4rem 1.2rem"
              borderRadius="0.3rem"
              margin="0 0 0 0.9rem"
            >
              구매 완료
            </FlexButton>
          )}
          {dummyData[i].BtnState === "buyable" && (
            <FlexButton
              backgroundColor={COLOR.font.primary}
              fontSize="0.9rem"
              padding="0.4rem 1.2rem"
              borderRadius="0.3rem"
              margin="0 0 0 0.9rem"
            >
              {dummyData[i].point}PP 구매
            </FlexButton>
          )}
          {dummyData[i].BtnState === "isLocked" && (
            <FlexButton
              backgroundColor="#8F3C3C"
              fontSize="0.9rem"
              padding="0.4rem 1.2rem"
              borderRadius="0.3rem"
              margin="0 0 0 0.9rem"
            >
              잠금 해제
            </FlexButton>
          )}
          {dummyData[i].BtnState === "deficient" && (
            <FlexButton
              backgroundColor="#8F3C3C"
              fontSize="0.9rem"
              padding="0.4rem 1.2rem"
              borderRadius="0.3rem"
              margin="0 0 0 0.9rem"
            >
              {dummyData[i].point} PP 부족
            </FlexButton>
          )}
        </FlexBox>
      </FlexBox>
    );
  }
  return newArr;
};

const Island = () => {
  return (
    <FlexBox column margin="0 0 0.5rem 0">
      <FlexTextBox fontSize="1.2rem" margin="0.2rem 0 0.9rem 0.5rem">
        <h3>🍃 섬 넓히기</h3>
      </FlexTextBox>
      {insertJSX()}
    </FlexBox>
  );
};

export default Island;
