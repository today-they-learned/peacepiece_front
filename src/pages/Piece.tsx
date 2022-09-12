import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import PostCardList from "components/Peace/Post/PostCardList";
import Writing from "components/Peace/Writing";
import styled from "styled-components";
import { useArticleListData } from "hooks/queries/article";
import Loading from "./Loading";

export const PieceContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const PostContainer = styled.div`
  flex: 2 2 calc((100% - 2rem) * 2 / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 0 10rem 0;
  @media (max-width: 1000px) {
    flex: 1 1 100%;
  }
`;

export const SubMenuContainer = styled.div`
  flex: 1 1 calc((100% - 2rem) / 3);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Piece = () => {
  const { ref, inView } = useInView();
  const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useArticleListData();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <PieceContainer>
      <SubMenuContainer>
        <PieceSearchBanner />
        <SimilarChallengeBanner title="🧐 추천 챌린지" />
      </SubMenuContainer>
      <PostContainer>
        <Writing />
        {isFetched &&
          data.pages.map((page) => (
            <PostCardList
              key={`PostCardList_${page?.data.current_page}`}
              articles={page?.data.results}
            />
          ))}
        <div style={{ width: "100%" }} ref={ref}>
          {isFetchingNextPage && <Loading />}
        </div>
      </PostContainer>
    </PieceContainer>
  );
};

export default Piece;
