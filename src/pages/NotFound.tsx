import ChallengeBanner from "components/Challenge/ChallengeBanner";
import React from "react";
// import EndedChallengeList from "components/Challenge/EndedChallengeList";

// const dummyChallenges = [
//   { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
//   { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
//   { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
//   { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
//   { id: 1, title: "이것은 지난 챌린지의 제목이다", person: 10, point: 100 },
// ];

const NotFound = () => {
  return (
    <div>
      404 NotFound
      <ChallengeBanner />
      <div style={{ marginBottom: "3rem" }} />
    </div>
  );
};

export default NotFound;
