import { useInfiniteQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeEndedQuery = (pageSize?: number, main?: string) => {
  const queryKey = [queryKeys.CHALLENGE_ENDED_DATA];
  if (main) queryKey.push(main);

  return useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }) => challengeAPI.ended(pageParam, pageSize || 10),
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
    }
  );
};

export default useChallengeEndedQuery;
