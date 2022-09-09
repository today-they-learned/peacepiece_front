import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useArticleSearchData } from "hooks/queries/article";
import PieceSearchResult from "components/Challenge/Banner/PieceSearchResult";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import { FlexBox } from "components/common";
import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import PostContainer from "components/Peace/Post/PostContainer";
import { ArticleType } from "types";

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
          numOfPiece={data.pages[0].data.current_page}
        />
        {isFetched &&
          data.pages.map((page, index) => {
            return (
              <Fragment key={`articlePage_${page?.data.current_page || index}`}>
                {page?.data.results.map((article: ArticleType) => (
                  <PostContainer
                    key={`article_${article.id}`}
                    article={article}
                  />
                ))}
              </Fragment>
            );
          })}
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
