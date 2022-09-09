import COLOR from "constants/color";
import { FlexBox, FlexTextBox, FlexButton } from "components/common";
import styled from "styled-components";

const dummyData = [
  {
    item: "나무",
    point: 10,
    BtnState: "isBuyed",
  },
];

const Img = styled.div`
  width: 70px;
  height: 70px;
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
            <FlexTextBox fontSize="1.05rem">{dummyData[i].item}</FlexTextBox>
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

const Item = () => {
  return (
    <FlexBox background="transparent" column margin="0 0 0.5rem 0">
      <FlexTextBox fontSize="1.2rem" margin="0.2rem 0 0.9rem 0.5rem">
        🌴 아이템 구매하기
      </FlexTextBox>
      {insertJSX()}
    </FlexBox>
  );
};

export default Item;
