import { ArticleType } from "types";

const dummyArticle: ArticleType = {
  id: 1,
  challenge: {
    id: "1",
    title: "일회용품 No! 다시 쓰기 Yes!",
    description: "이 챌린지는 블라블라 ~",
    categories: [
      {
        id: 2,
        title: "일회용품 줄이기",
      },
    ],
    prover_cnt: 10,
    point: 100,
    images: [
      {
        id: 1,
        file: "images/image3.png",
        created_at: "2022-08-30T01:10:53.265788+09:00",
      },
      {
        id: 2,
        file: "images/image4.png",
        created_at: "2022-08-30T01:10:53.265788+09:00",
      },
    ],
    thumbnail: {
      id: 1,
      file: "/images/card.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_proved: true,
    start_at: "2022-08-30T01:10:53.265788+09:00",
    end_at: "2022-08-30T01:10:53.265788+09:00",
    // images: [
    //   {
    //     id: 1,
    //     file: "images/image3.png",
    //     created_at: "2022-08-30T01:10:53.265788+09:00",
    //   },
    //   {
    //     id: 2,
    //     file: "images/image4.png",
    //     created_at: "2022-08-30T01:10:53.265788+09:00",
    //   },
    //   {
    //     id: 3,
    //     file: "images/image5.png",
    //     created_at: "2022-08-30T01:10:53.265788+09:00",
    //   },
    //   {
    //     id: 4,
    //     file: "images/image3.png",
    //     created_at: "2022-08-30T01:10:53.265788+09:00",
    //   },
    // ],
  },
  content:
    "이번 챌린지는 정말 어려웠습니다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이 정하는 바에 의하여 정당운영에 필요한 ... 블라블라블라 blablablablabla...... 블라블라 ...!!",
  created_at: "2022.08.10",
  writer: {
    id: 1,
    username: "홍길동",
    avatar: "images/man.png",
  },
  images: [
    {
      id: 1,
      file: "images/image3.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    {
      id: 2,
      file: "images/image4.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    {
      id: 3,
      file: "images/image5.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    {
      id: 4,
      file: "images/image3.png",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
  ],
};

export default dummyArticle;
