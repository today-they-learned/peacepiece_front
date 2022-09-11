import { useInfiniteQuery } from "react-query";
import challengeSuggestionAPI from "apis/challengeSuggestionAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeSuggestionListQuery = (pageSize?: number, main?: string) => {
  const queryKey = [queryKeys.CHALLENGE_SUGGESTION_LIST];
  if (main) queryKey.push(main);
  return useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) =>
      challengeSuggestionAPI.list.get(pageParam, pageSize || 9),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data) {
          const currentPage = lastPage.data.current_page;
          const totalPages = lastPage.data.total_pages;
          return currentPage < totalPages && currentPage + 1;
        }
        return 1;
      },
      staleTime: 0,
      keepPreviousData: true,
    }
  );
};

export default useChallengeSuggestionListQuery;
