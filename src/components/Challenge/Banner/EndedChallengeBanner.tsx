import React from "react";
import { ChallengeBanner } from "components/Challenge";
import EndedChallengeList from "../EndedChallengeList";

const dummyChallenges = [
  { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
  { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
];

const script = {
  title: "🙇‍♂️ 지난 챌린지",
  url: "/challenge/ended",
};

export const EndedchallengeBanner = () => {
  return (
    <ChallengeBanner title={script.title} url={script.url}>
      <EndedChallengeList challenges={dummyChallenges} />
    </ChallengeBanner>
  );
};
