import { useInfiniteQuery } from "react-query";
import challengeArticleAPI from "apis/challengeArticleAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeArticleQuery = (challengeId: string) => {
  return useInfiniteQuery(
    [queryKeys.CHALLENGE_ARTICLE_LIST, challengeId],
    ({ pageParam = 1 }) => challengeArticleAPI.get(challengeId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.current_page;
        const totalPages = lastPage.data.total_pages;
        return currentPage < totalPages && currentPage + 1;
      },
      keepPreviousData: true,
      enabled: false,
      // select: ({ data }) => data.data,
    }
  );
};

export default useChallengeArticleQuery;
