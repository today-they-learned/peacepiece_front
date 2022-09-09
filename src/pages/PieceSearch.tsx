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
          keyword={keyword}
          numOfPiece={data.pages[0].data.total_pages}
        />
        <PostCardList />
      </FlexBox>
      <FlexBox column alignItems="center">
        <PieceSearchBanner />
        <SimilarChallengeBanner title="🧐 추천 챌린지" />
      </FlexBox>
    </FlexBox>
  );
};

export default PieceSearch;
