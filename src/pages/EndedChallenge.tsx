import { ChallengeTitle } from "components/Challenge";
import { FlexBox } from "components/common";
import { ChallengeType } from "types";
import EndedChallengeCardList from "components/Challenge/EndedChallengeCardList";
import COLOR from "constants/color";

const script = {
  title: "📌 지난 챌린지",
};

const dummyChallenges: ChallengeType[] = [
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
  {
    id: "1",
    title: "텀블러로 커피 마시는 멋진 나는..",
    description: "내용",
    categories: [
      {
        id: 1,
        title: "001a",
      },
      {
        id: 2,
        title: "텀블러_챌린지",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: false,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
  },
];

const EndedChallenge = () => {
  return (
    <FlexBox
      width="100%"
      height="100%"
      justifyContent="center"
      padding="1rem"
      column
      margin="2rem 0 0 0"
    >
      <ChallengeTitle title={script.title} />
      <EndedChallengeCardList challenges={dummyChallenges} />
    </FlexBox>
  );
};

export default EndedChallenge;
