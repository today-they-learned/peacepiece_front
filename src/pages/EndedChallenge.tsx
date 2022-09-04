import { ChallengeTitle } from "components/Challenge";
import { FlexBox } from "components/common";
<<<<<<< HEAD
import Communication from "components/Peace/Post/Communication";
=======
import { ChallengeType } from "types/challenge";
import EndedChallengeCardList from "components/Challenge/EndedChallengeCardList";
>>>>>>> main

const script = {
  title: "📌 지난 챌린지",
};

const dummyChallenges: ChallengeType[] = [
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
  {
    id: "2",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "3",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "4",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
  {
    id: "5",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: false,
  },
  {
    id: "1",
    thumbnail: "/images/card.png",
    title: "텀블러로 커피 마시는 멋진 나는..",
    person: 10,
    point: 100,
    tags: ["001a", "텀블러_챌린지"],
    isProved: true,
  },
];

const EndedChallenge = () => {
  return (
    <FlexBox
      width="100%"
      height="100%"
      justifyContent="center"
      margin="2rem auto"
      padding="1rem"
      column
    >
      <ChallengeTitle title={script.title} />
<<<<<<< HEAD
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
=======
      <EndedChallengeCardList challenges={dummyChallenges} />
>>>>>>> main
    </FlexBox>
  );
};

export default EndedChallenge;
