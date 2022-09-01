import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { Divider } from "semantic-ui-react";
import TestimonialCard from "../Card/TestimonialCard";
import ChallengeBanner from "../ChallengeBanner";

export type PieceType = {
  id: string;
  avatar: string;
  userName: string;
  date: string;
  content: string;
  images: string[];
};

const dummyPieces = [
  {
    id: "1",
    avatar: "images/man.png",
    userName: "홍길동",
    date: "2022.08.10",
    content:
      "이번 챌린지는 정말 어려웠습니다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한...",
    images: [
      "images/image3.png",
      "images/image4.png",
      "images/image5.png",
      "images/image3.png",
    ],
  },
  {
    id: "1",
    avatar: "images/man.png",
    userName: "홍길동",
    date: "2022.08.10",
    content:
      "이번 챌린지는 정말 어려웠습니다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한...",
    images: [
      "images/image3.png",
      "images/image4.png",
      "images/image5.png",
      "images/image3.png",
    ],
  },
];

const script = {
  title: "챌린지 인증",
};

const ChallengeTestimonial = () => {
  return (
    <ChallengeBanner
      title={script.title}
      width="52.25rem"
      titleColor={COLOR.font.primary}
      padding="2rem 3rem"
    >
      <FlexBox
        width="45rem"
        height="4.8rem"
        borderRadius="1.2rem"
        alignItems="center"
        padding="0 0 0 2rem"
        margin="2rem 0 0 0"
      >
        <FlexTextBox
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          color={COLOR.font.disabled}
        >
          챌린지를 달성했나요? 모두에게 인증해주세요!
        </FlexTextBox>
      </FlexBox>
      <Divider style={{ width: "100%", margin: "2rem 0 " }} />
      <FlexBox
        column
        background="transparent"
        justifyContent="center"
        alignItems="center"
      >
        {dummyPieces.map((piece) => (
          <TestimonialCard key={piece.id} piece={piece} />
        ))}
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeTestimonial;
