import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeCategoryQuery = (keyword: string) => {
  return useQuery(
    [queryKeys.CHALLENGE_CATEGORY_DATA, keyword],
    () => challengeAPI.category(keyword),
    {
      enabled: !!keyword,
      staleTime: 0,
      cacheTime: 60 * 1000,
      keepPreviousData: true,
      refetchOnMount: false,
      select: (data) => {
        return data.data;
      },
    }
  );
};

export default useChallengeCategoryQuery;
