import { ChallengeSuggestionCard } from "components/Challenge/Card";
import { FlexBox } from "components/common";
import { ChallengeBanner } from "components/Challenge";
import COLOR from "constants/color";

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

const ChallengeSuggestionGather = () => {
  return (
    <ChallengeBanner
      width="52.25rem"
      padding="2rem 2.5rem"
      title="🧐 이런 챌린지는 어때요?"
      url="/challenge/suggestion"
    >
      <FlexBox margin="1rem 0 0 0" wrap="wrap" background={COLOR.bg.primary}>
        {dummyChallenges.map((challenge) => (
          <ChallengeSuggestionCard
            key={challenge.id}
            suggester={challenge.suggester}
            content={challenge.content}
            feedbackCount={challenge.feedbackCount}
            isFeedbacked={challenge.clicked}
          />
        ))}
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeSuggestionGather;
