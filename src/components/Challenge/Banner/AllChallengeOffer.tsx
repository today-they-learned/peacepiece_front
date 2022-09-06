import ChallengeBanner from "../ChallengeBanner";
import AllChallengeOfferList from "../AllChallengeOfferList";

const dummyChallenges = [
  {
    id: 1,
    suggester: "yoochan",
    content: "일회용컵 No! 텀블러 Yes!",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "minji",
    content: "PeacePiece 최고에요",
    feedbackCount: 70,
    clicked: true,
  },
  {
    id: 1,
    suggester: "Yoochan",
    content:
      "요즘 나무젓가락 / 종이컵을 너무 많이 사용하는 것 같아요. 일회용품으로 사용할 법한 종류의 물건을 가지고 다니면서 사용하는 챌린지 어때요?",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "Yoochan",
    content: "PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요?",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "minji",
    content: "PeacePiece 최고에요",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "Yoochan",
    content: "PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요?",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "minji",
    content: "PeacePiece 최고에요",
    feedbackCount: 90,
    clicked: false,
  },
  {
    id: 1,
    suggester: "Yoochan",
    content: "PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요?",
    feedbackCount: 100,
    clicked: true,
  },
];

const script = {
  title: "😎 챌린지 제안 모아보기",
};

const AllChallengeOffer = () => {
  return (
    <ChallengeBanner title={script.title} width="76rem" padding="2rem">
      <AllChallengeOfferList challenges={dummyChallenges} />
    </ChallengeBanner>
  );
};

export default AllChallengeOffer;
