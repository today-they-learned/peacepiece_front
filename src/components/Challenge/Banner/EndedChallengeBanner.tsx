import { ChallengeBanner } from "components/Challenge";
import EndedChallengeList from "components/Challenge/EndedChallengeList";

const dummyChallenges = [
  { id: 1, title: "이것은 지난 챌린지의 제목이다", proverCnt: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", proverCnt: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", proverCnt: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", proverCnt: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", proverCnt: 10, point: 100 },
];

const script = {
  title: "🙇‍♂️ 지난 챌린지",
  url: "/challenge/ended",
};

const EndedChallengeBanner = () => {
  return (
    <ChallengeBanner title={script.title} url={script.url}>
      <EndedChallengeList challenges={dummyChallenges} />
    </ChallengeBanner>
  );
};

export default EndedChallengeBanner;
