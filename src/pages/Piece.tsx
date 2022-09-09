import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import PostCardList from "components/Peace/Post/PostCardList";
import Writing from "components/Peace/Writing";
import styled from "styled-components";

const PieceContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const PostContainer = styled.div`
  flex: 2 2 calc((100% - 2rem) * 2 / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 0 10rem 0;
  @media (max-width: 1000px) {
    flex: 1 1 100%;
  }
`;

const SubMenuContainer = styled.div`
  flex: 1 1 calc((100% - 2rem) / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Piece = () => {
  return (
    <PieceContainer>
      <SubMenuContainer>
        <PieceSearchBanner />
        <SimilarChallengeBanner title="🧐 추천 챌린지" />
      </SubMenuContainer>
      <PostContainer>
        <Writing />
        <PostCardList />
      </PostContainer>
    </PieceContainer>
  );
};

export default Piece;
