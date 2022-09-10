import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";

const dummyData = [
  {
    role: "팀리더",
    name: "김신건",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    role: "팀원",
    name: "권소예",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    role: "팀원",
    name: "김민정",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    role: "팀원",
    name: "진승희",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    role: "팀원",
    name: "최지현",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    role: "팀원",
    name: "최유찬",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
];

const Img = styled.img`
  width: 100%;
  height: 11rem;
  border-radius: 20%;
  background: #d9d9d9;
  cursor: pointer;
  object-fit: cover;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 68%;
  @media (max-width: 767px) {
    width: 68%;
  }
`;
const Profile = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 16%;
  background: #d9d9d9;
  cursor: pointer;
`;
const Div = styled.div`
  flex: 1 1 calc((100% - 2rem) / 6);
  max-width: calc((100% - 2rem) / 6);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    flex: 1 1 calc((100% - 2rem) / 3);
    max-width: calc((100% - 2rem) / 3);
  }
`;

const CrewIntro = () => {
  const [idx, setIdx] = useState(0);
  return (
    <FlexBox column gap="2rem">
      <FlexBox gap="2rem">
        <Div>
          <Img
            onClick={() => setIdx(0)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀 리더</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">김신건</FlexTextBox>
        </Div>
        <Div>
          <Img
            onClick={() => setIdx(1)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">권소예</FlexTextBox>
        </Div>
        <Div>
          <Img
            onClick={() => setIdx(2)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">김민정</FlexTextBox>
        </Div>
        <Div>
          <Img
            onClick={() => setIdx(3)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">진승희</FlexTextBox>
        </Div>
        <Div>
          <Img
            onClick={() => setIdx(4)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">최지현</FlexTextBox>
        </Div>
        <Div>
          <Img
            onClick={() => setIdx(5)}
            src={`${process.env.PUBLIC_URL}/images/image2.png`}
          />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">최유찬</FlexTextBox>
        </Div>
      </FlexBox>
      <FlexBox
        width="100%"
        padding="2rem"
        gap="1.5rem"
        background={COLOR.bg.navSecondary}
      >
        <Profile />
        <ContentContainer>
          <FlexTextBox color={COLOR.font.info} fontFamily="Pr-Regular">
            {dummyData[idx].role}
          </FlexTextBox>
          <FlexTextBox fontSize="1.7rem" fontFamily="Pr-Regular">
            {dummyData[idx].name}
          </FlexTextBox>
          <FlexTextBox
            color={COLOR.font.primary}
            fontFamily="Pr-Regular"
            margin="0.5rem 0 0 0"
          >
            {dummyData[idx].intro}
          </FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">
            {dummyData[idx].content}
          </FlexTextBox>
        </ContentContainer>
      </FlexBox>
    </FlexBox>
  );
};
export default CrewIntro;
