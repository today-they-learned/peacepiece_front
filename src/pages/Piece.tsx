import { Fragment, useEffect } from "react";
import PieceSearchBanner from "components/Peace/PieceSearchBanner";
import SimilarChallengeBanner from "components/Challenge/Banner/SimilarChallengeBanner";
import { FlexBox } from "components/common";
import PostContainer from "components/Peace/Post/PostContainer";
import Writing from "components/Peace/Writing";
import { useArticleListData } from "hooks/queries/article";
import { useInView } from "react-intersection-observer";
import { ArticleType } from "types";

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
    <FlexBox justifyContent="center" height="100%">
      <FlexBox column alignItems="center" margin="0 0 10rem 0">
        <Writing />
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

export default Piece;
