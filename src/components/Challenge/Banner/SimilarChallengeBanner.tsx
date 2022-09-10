import { ChallengeTitle } from "components/Challenge";
import styled from "styled-components";
import COLOR from "constants/color";
import SimilarChallengeList from "../SimilarChallengeList";

interface Props {
  title: string;
}

const dummyChallenges = [
  {
    id: 1,
    title: "일회용컵 No! 텀블러 Yes!",
    proverCnt: 10,
    point: 100,
    description:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
  {
    id: 2,
    title: "일회용컵 No! 텀블러 Yes!",
    proverCnt: 10,
    point: 100,
    description:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
  {
    id: 3,
    title: "일회용컵 No! 텀블러 Yes!",
    proverCnt: 10,
    point: 100,
    description:
      "일주일동안 음료를 마실 때, 텀블러를 이용하고 인증사진을 공유해주세요!",
  },
];

const SimilarChallengeBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  padding: 1.5rem;
  border-radius: 1.4rem;
  background: ${COLOR.bg.primary};

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const SimilarChallengeBanner = (props: Props) => {
  const { title } = props;
  return (
    <SimilarChallengeBannerContainer>
      <ChallengeTitle title={title} background="trasparent" />
      <SimilarChallengeList challenges={dummyChallenges} />
    </SimilarChallengeBannerContainer>
  );
};

export default SimilarChallengeBanner;
