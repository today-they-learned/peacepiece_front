import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useArticleSearchData } from "hooks/queries/article";
import PieceSearchResult from "components/Challenge/Banner/PieceSearchResult";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import PostCardList from "components/Peace/Post/PostCardList";
import { PieceContainer, PostContainer, SubMenuContainer } from "./Piece";

const PieceSearch = () => {
  const { keyword } = useParams();

  const { ref, inView } = useInView();
  const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useArticleSearchData(keyword);

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
        <PieceSearchResult
          isFetched={isFetched}
          keyword={keyword}
          numOfPiece={data?.pages[0].data.total_count}
        />
        {isFetched &&
          data?.pages.map((page) => (
            <PostCardList
              key={`PostCardList_${page?.data.current_page}`}
              articles={page?.data.results}
            />
          ))}
        <div ref={ref}>{isFetchingNextPage && "로딩중..."}</div>
      </PostContainer>
    </PieceContainer>
  );
};

export default PieceSearch;
