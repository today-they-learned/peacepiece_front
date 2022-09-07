import { useInfiniteQuery } from "react-query";
import challengeSuggestionAPI from "apis/challengeSuggestionAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeSuggestionListQuery = () => {
  return useInfiniteQuery(
    [queryKeys.CHALLENGE_SUGGESTION_LIST],
    ({ pageParam = 1 }) => challengeSuggestionAPI.list.get(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data) {
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

export default useChallengeSuggestionListQuery;
