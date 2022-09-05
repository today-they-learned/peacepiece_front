import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import { FlexBox } from "components/common";
import PostContainer from "components/Peace/Post/PostContainer";
import Writing from "components/Peace/Writing";

const Piece = () => {
  return (
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <Writing />
        <PostContainer />
      </FlexBox>
      <FlexBox column alignItems="center">
        <PieceSearchBanner />
        <SimilarChallengeBanner title="🧐 추천 챌린지" />
      </FlexBox>
    </FlexBox>
  );
};

export default Piece;
