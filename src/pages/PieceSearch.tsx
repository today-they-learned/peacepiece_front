import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useArticleSearchData } from "hooks/queries/article";
import PieceSearchResult from "components/Challenge/Banner/PieceSearchResult";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import { FlexBox } from "components/common";
import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import PostCardList from "components/Peace/Post/PostCardList";

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
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
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
      </FlexBox>
      <FlexBox column alignItems="center">
        <PieceSearchBanner />
        <SimilarChallengeBanner title="🧐 추천 챌린지" />
      </FlexBox>
    </FlexBox>
  );
};

export default PieceSearch;
