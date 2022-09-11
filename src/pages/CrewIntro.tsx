import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";

const dummyData = [
  {
    id: 1,
    role: "팀 리더",
    name: "김신건",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    id: 2,
    role: "팀원",
    name: "권소예",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    id: 3,
    role: "팀원",
    name: "김민정",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    id: 4,
    role: "팀원",
    name: "진승희",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    id: 5,
    role: "팀원",
    name: "최지현",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
  {
    id: 6,
    role: "팀원",
    name: "최유찬",
    profile: "images/image2.png",
    intro: "안녕하세요 블라블라 인사말 김신건입니다.",
    content:
      "대충 소개말 뭐 했고, 어떤 걸 느꼈다.대충 소개말 뭐 했고, 어떤 걸 느꼈다.",
  },
];

const Img = styled.img`
  height: 11rem;
  border-radius: 3rem;
  background: #d9d9d9;
  cursor: pointer;
  object-fit: cover;
`;
const Profile = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 16%;
  background: #d9d9d9;
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  flex-wrap: wrap;
  @media (max-width: 1023px) {
    gap: 3vw;
  }
`;

const Div = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  flex: 1 1 calc(100% / 7);
  @media (max-width: 1023px) {
    flex: 1 1 calc(100% / 4);
  }
`;

const CrewIntro = () => {
  const [idx, setidx] = useState(1);
  return (
    <>
      <ContentContainer>
        {dummyData.map((data) => (
          <Div key={`crew-intro_${data.name}`}>
            <Img
              onClick={() => setidx(data.id)}
              src={`${process.env.PUBLIC_URL}/${data.profile}`}
            />
            <FlexTextBox fontFamily="Pr-Regular">{data.role}</FlexTextBox>
            <FlexTextBox fontFamily="Pr-Regular">{data.name}</FlexTextBox>
          </Div>
        ))}
      </ContentContainer>
      <FlexBox
        width="100%"
        margin="1.5rem 0 0 0"
        padding="2rem"
        gap="1.5rem"
        background={COLOR.bg.navSecondary}
      >
        <Profile />
        <FlexBox width="70%" column gap="0.4rem">
          <FlexTextBox color={COLOR.font.info} fontFamily="Pr-Regular">
            {dummyData[idx - 1].role}
          </FlexTextBox>
          <FlexTextBox fontSize="1.7rem" fontFamily="Pr-Regular">
            {dummyData[idx - 1].name}
          </FlexTextBox>
          <FlexTextBox
            color={COLOR.font.primary}
            fontFamily="Pr-Regular"
            margin="0.6rem 0 0 0"
          >
            {dummyData[idx - 1].intro}
          </FlexTextBox>
          <FlexTextBox fontFamily="Pr-Regular">
            {dummyData[idx - 1].content}
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
export default CrewIntro;
