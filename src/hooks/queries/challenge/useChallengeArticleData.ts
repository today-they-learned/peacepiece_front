import { useInfiniteQuery } from "react-query";
import challengeArticleAPI from "apis/challengeArticleAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeArticleQuery = (challengeId: string) => {
  return useInfiniteQuery(
    [queryKeys.CHALLENGE_ARTICLE_LIST, challengeId],
    ({ pageParam = 1 }) => challengeArticleAPI.get(challengeId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage) {
          const currentPage = lastPage.data.current_page;
          const totalPages = lastPage.data.total_pages;
          return currentPage < totalPages && currentPage + 1;
        }
        return 1;
      },
      keepPreviousData: true,
      staleTime: 0,
    }
  );
};

export default useChallengeArticleQuery;
