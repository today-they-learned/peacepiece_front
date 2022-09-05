import { ChallengeBanner } from "components/Challenge";
import SimilarChallengeList from "../SimilarChallengeList";

interface Props {
  title: string;
}

const dummyChallenges = [
  {
    id: 1,
    title: "일회용컵 No! 텀블러 Yes!",
    person: 10,
    point: 100,
    content:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
  {
    id: 2,
    title: "일회용컵 No! 텀블러 Yes!",
    person: 10,
    point: 100,
    content:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
  {
    id: 3,
    title: "일회용컵 No! 텀블러 Yes!",
    person: 10,
    point: 100,
    content:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
];

const SimilarChallengeBanner = (props: Props) => {
  const { title } = props;
  return (
    <ChallengeBanner title={title}>
      <SimilarChallengeList challenges={dummyChallenges} />
    </ChallengeBanner>
  );
};

export default SimilarChallengeBanner;
