import { ChallengeOfferCard } from "components/Challenge/Card";
import { FlexBox, FlexButton, BannerBox } from "components/common";
import { ChallengeTitle } from "components/Challenge";

const OfferChallengeBanner = () => {
  return (
    <BannerBox width="52.25rem">
      <FlexBox margin="0.5rem 0 0 0">
        <ChallengeTitle title="🧐 이런 챌린지는 어때요?" />
        <FlexButton margin="0 0 0 25.5rem" fontSize="0.9rem">
          전체보기 {">"}
        </FlexButton>
      </FlexBox>
      <FlexBox margin="1rem 0 0 0" wrap="wrap">
        <ChallengeOfferCard
          userName="SoyE"
          content="요즘 나무젓가락 / 종이컵을 너무 많이 사용하는 것 같아요. 일회용품으로 사용할 법한 종류의 물건을 가지고 다니면서 사용하는 챌린지 어때요?"
          like={100}
          clicked
        />
        <ChallengeOfferCard
          userName="SoyE"
          content="PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요 ? "
          like={100}
          clicked
        />
        <ChallengeOfferCard
          userName="SoyE"
          content="PeachPiece 최고에요 산에서 쓰레기 모아오기 챌린지는 어때요 ? "
          like={100}
          clicked
        />
        <ChallengeOfferCard
          userName="SoyE"
          content="요즘 나무젓가락 / 종이컵을 너무 많이 사용하는 것 같아요. 일회용품으로 사용할 법한 종류의 물건을 가지고 다니면서 사용하는 챌린지 어때요?"
          like={100}
          clicked
        />
      </FlexBox>
    </BannerBox>
  );
};

export default OfferChallengeBanner;
