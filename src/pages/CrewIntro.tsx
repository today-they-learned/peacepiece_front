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

interface Props {
  gap?: string;
}

const defaultProps = {
  gap: "2rem",
};

// const Img = styled.img`
//   flex: 1 1 calc((100% - 2rem) / 3);
//   max-width: calc((100% - 2rem) / 3);
//   height: auto;
//   max-height: 9.3rem;
//   object-fit: cover;
// `;
const CrewIntroContainer = styled.div<{ gap: string }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  max-width: 100%;
  margin-left: 0.5rem;
  display: flex;
  border: none !important;
  gap: 1rem;
  padding: 1rem;
  flex-direction: row;
`;

const Img = styled.img`
  flex: 1 1 calc((100% - 1rem) / 6);
  max-width: calc((100% - 1rem) / 6);
  height: auto;
  max-height: 9.3rem;
  border-radius: 50%;
  background: #d9d9d9;
  cursor: pointer;
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

const CrewIntro = ({ gap }: Props) => {
  const [idx, setIdx] = useState(0);
  return (
    <FlexBox column gap="2rem">
      <CrewIntroContainer gap={gap}>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(0)} />
          <FlexTextBox fontFamily="Pr-Regular">팀 리더</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">김신건</FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(1)} />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">권소예</FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(2)} />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">김민정</FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(3)} />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">진승희</FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(4)} />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">최지현</FlexTextBox>
        </FlexBox>
        <FlexBox width="100%" column center gap="0.4rem">
          <Img onClick={() => setIdx(5)} />
          <FlexTextBox fontFamily="Pr-Regular">팀원</FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">최유찬</FlexTextBox>
        </FlexBox>
      </CrewIntroContainer>
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

CrewIntro.defaultProps = defaultProps;
export default CrewIntro;
