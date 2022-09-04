import ChallengeCard from "components/Challenge/Card/ChallengeCard";
import EndedChallengeCard from "components/Challenge/Card/EndedChallengeCard";
import { ChallengeTitle } from "components/Challenge";
import { FlexBox } from "components/common";
import Communication from "components/Peace/Post/Communication";

const script = {
  title: "📌 지난 챌린지",
};

export type ChallengeType = {
  id: string;
  thumbnail: string;
  title: string;
  person: number;
  point: number;
  tags: string[];
};

const dummyChallenges = [
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    complete: true,
  },
];

const EndedChallenge = () => {
  const defaultMargin = "0 0 2.8rem 0";
  return (
    <FlexBox
      width="73.56rem"
      height="100%"
      justifyContent="center"
      margin="2rem auto"
      column
    >
      <ChallengeTitle title={script.title} />
      <FlexBox
        width="100%"
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        margin="2rem 0 0 0"
      >
        {dummyChallenges.map((challenge) =>
          challenge.complete ? (
            <EndedChallengeCard challenge={challenge} margin={defaultMargin} />
          ) : (
            <ChallengeCard challenge={challenge} margin={defaultMargin} />
          )
        )}
      </FlexBox>
      <Communication />
    </FlexBox>
  );
};

export default EndedChallenge;
