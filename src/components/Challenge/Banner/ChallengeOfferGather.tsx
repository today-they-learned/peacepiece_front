import { ChallengeOfferCard } from "components/Challenge/Card";
import { ChallengeBanner } from "components/Challenge";
import COLOR from "constants/color";
import { FlexBox } from "components/common";

const dummyChallenges = [
  {
    id: 1,
    suggester: "singun11",
    content:
      "요즘 나무젓가락 / 종이컵을 너무 많이 사용하는 것 같아요. 일회용품으로 사용할 법한 종류의 물건을 가지고 다니면서 사용하는 챌린지 어때요?",
    feedbackCount: 100,
    clicked: false,
  },
  {
    id: 1,
    suggester: "singun11",
    content: "PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요?",
    feedbackCount: 100,
    clicked: true,
  },
  {
    id: 1,
    suggester: "singun11",
    content: "PeacePiece 최고에요",
    feedbackCount: 100,
    clicked: false,
  },
  {
    id: 1,
    suggester: "singun11",
    content:
      "요즘 나무젓가락 / 종이컵을 너무 많이 사용하는 것 같아요. 일회용품으로 사용할 법한 종류의 물건을 가지고 다니면서 사용하는 챌린지 어때요?",
    feedbackCount: 100,
    clicked: false,
  },
];

const ChallengeOfferGather = () => {
  return (
    <ChallengeBanner
      width="100%"
      widthMobile="100%"
      padding="2rem 2.5rem"
      title="🧐 이런 챌린지는 어때요?"
      url="/challenge/offer"
    >
      <FlexBox
        wrap="wrap"
        margin="2rem 0 0 0"
        background={COLOR.bg.primary}
        gap="1rem"
      >
        {dummyChallenges.map((challenge) => (
          <ChallengeOfferCard
            key={challenge.id}
            suggester={challenge.suggester}
            content={challenge.content}
            feedbackCount={challenge.feedbackCount}
            isFeedbacked={challenge.clicked}
            gap="1rem"
          />
        ))}
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeOfferGather;
