import { useState } from "react";
import styled from "styled-components";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";

const CrewData = [
  {
    role: "팀 리더",
    name: "김신건",
    profile: "images/신건.png",
    intro: "안녕하세요 😎 팀장을 맡은 김신건입니다.",
    content:
      "프로젝트 기획/디자인 제작 및 프로젝트 전반의 개발을 관리/진행하였습니다.\n\n" +
      "기존에 개발만 해오던 상황에서, 이번 프로젝트로 하여금 기획 파트에서는 " +
      "Figma를 이용한 기획 / 디자인을 새롭게 접해볼 수 있었고, 생각보다 많은 어려움을 해결하는 과정이 뿌듯했습니다.\n\n" +
      "개발 분야에서는 간단한 웹 게임을 개발하는 새로운 경험을 할 수 있어 좋았습니다.",
  },
  {
    role: "팀원",
    name: "김민정",
    profile: "images/민정.png",
    intro: "안녕하세요 🤗 프론트엔드 개발을 맡은 김민정입니다. ",
    content:
      "프론트엔드에서 백엔드로의 api 통신과 데이터 연결 및 컴포넌트 구조 설계 및 성능 최적화를 주로 담당했습니다. \n\n" +
      "TTL 팀원들과의 두번째 프로젝트입니다. 이전 프로젝트에서 한단계 더 성장한 모습을 보여줄 수 있어서 기쁩니다. \n" +
      "이전의 문제점을 교훈삼아 PeacePiece에서는 새로운 기술들을 도입하여 서비스의 성능을 더욱 개선할 수 있었습니다. \n\n" +
      "환경에 대한 주제로 프로젝트를 진행하면서 호응과 참여를 이끌어내기 위한 방법들을 고심하는 기회가 되었습니다. \n" +
      "앞으로도 환경 보호에 대해 생각만이 아닌 실천으로 옮기는 삶을 살도록 노력하겠습니다.",
  },
  {
    role: "팀원",
    name: "권소예",
    profile: "images/소예.png",
    intro: "안녕하세요 😊  프론트엔드 개발을 맡은 권소예입니다.",
    content:
      "이번 프로젝트에서 팀원 소개 페이지 반응형 및 재사용 가능한 컴포넌트들을 주로 개발했습니다.\n\n" +
      "프로젝트를 하는 과정에서 팀원들과 개발적인 측면이랑 의사소통 측면에서 같이 성장할 수 있는 좋은 경험이었습니다.\n\n" +
      "환경 관련 주제를 다루면서 이 문제에 더 관심을 가지게 되고 어떤 행동이 진짜  환경에 도움이 되는 행동인지 깊게 생각해보는 시간을 가졌습니다. " +
      "일상 생활에서 친환경적인 행동을 실천하는 사람이 되겠습니다.\n",
  },
  {
    role: "팀원",
    name: "최유찬",
    profile: "images/유찬.png",
    intro: "안녕하세요 🐥 프론트엔드 개발을 맡은 최유찬입니다.",
    content:
      "이번 프로젝트에서, 반응형 디자인 및 레이아웃 작업 및 페이지에 필요한 컴포넌트들을 주로 개발했습니다.\n\n" +
      "합이 잘 맞는 팀원들과 두 번째 프로젝트를 할 수 있어 기뻤습니다. " +
      "이전 프로젝트와 비교했을 때 나름 성장했던 부분을 느낌과 동시에, 다시 한번 공부하여 채워야 할 부족한 부분을 검토할 수 있는 좋은 경험이었습니다.",
  },
  {
    role: "팀원",
    name: "진승희",
    profile: "images/승희.png",
    intro: "안녕하세요 🥰 백엔드 개발을 맡은 진승희입니다.",
    content:
      "저는 이번 프로젝트에서 초기 세팅과 jwt 를 이용한 사용자의 인증 및 인가를 맡았습니다.\n\n" +
      "또한 전반적인 erd 구조를 짜고 필드를 구성했습니다. 이외에도 알림 api, 각종 모델 구성, admin 액션 구현 등을 맡아 진행했습니다.\n" +
      "환경 문제에 대한 무력감은 나 하나 노력한다고 변화가 생길까 하는 마음에서 비롯된다고 생각합니다. " +
      "그러나 저희 플랫폼을 통해서라면 챌린지 제안 및 참여를 통해 변화를 이끌어 내는 사용자들 간의 연대와 협력이 더욱 견고해질 것이며 " +
      "나의 섬 꾸미기를 통해 자신의 환경을 위한 행동들이 환경에 어떠한 변화를 주는지 가시적으로 확인할 수 있습니다.\n\n" +
      "그런 의미에서 해당 프로젝트를 개발하며, 저희 플랫폼이 많은 사용자를 유치하여 더 큰 의미를 갖는 서비스로 성장했으면 좋겠다고 생각했습니다. 피스피스 파이팅~!",
  },
  {
    role: "팀원",
    name: "최지현",
    profile: "images/지현.png",
    intro: "안녕하세요 🥳 백엔드 개발을 맡은 최지현입니다.",
    content:
      "백엔드 프로젝트 배포와 모델 구현 및 전반적인 API 개발하였으며 QA를 진행하였습니다.",
  },
];

const Img = styled.img`
  border-radius: 3rem;
  width: 6rem;
  height: auto;
  cursor: pointer;
  object-fit: cover;

  @media (max-width: 1023px) {
    gap: 3vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 1023px) {
    flex: 1;
  }
`;

const Div = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

const CrewIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  width: 100%;

  @media (max-width: 1023px) {
    flex: 1 1 calc(80% / 3);
  }
`;

const CrewIntro = () => {
  const [idx, setidx] = useState(0);
  return (
    <>
      <ContentContainer>
        {CrewData.map((data, index) => (
          <Div key={`crew-intro_${data.name}`}>
            <Img
              onClick={() => setidx(index)}
              src={`${process.env.PUBLIC_URL}/${data.profile}`}
            />
            <FlexTextBox fontFamily="Pr-Regular">{data.name}</FlexTextBox>
          </Div>
        ))}
      </ContentContainer>
      <CrewIntroContainer>
        <FlexBox
          width="100%"
          margin="2.5rem 0 1rem 0"
          padding="2rem"
          gap="1.5rem"
          background={COLOR.bg.navSecondary}
        >
          <Div key={`crew-intro_${CrewData[idx].name}`}>
            <Img src={`${process.env.PUBLIC_URL}/${CrewData[idx].profile}`} />
          </Div>
          <FlexBox width="100%" column gap="0.4rem">
            <FlexTextBox color={COLOR.font.info} fontFamily="Pr-Regular">
              {CrewData[idx].role}
            </FlexTextBox>
            <FlexTextBox fontSize="1.7rem" fontFamily="Pr-Regular">
              {CrewData[idx].name}
            </FlexTextBox>
            <FlexTextBox
              color={COLOR.font.primary}
              fontFamily="Pr-Regular"
              margin="0.6rem 0 0 0"
            >
              {CrewData[idx].intro}
            </FlexTextBox>
            <br />
            <FlexTextBox fontFamily="Pr-Regular" whiteSpace="pre-wrap">
              {CrewData[idx].content}
            </FlexTextBox>
          </FlexBox>
        </FlexBox>
      </CrewIntroContainer>
    </>
  );
};
export default CrewIntro;
