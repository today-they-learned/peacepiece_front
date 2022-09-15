import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useRecommendChallengeQuery = () => {
  return useQuery(
    [queryKeys.CHALLENGE_RECOMMEND_LIST],
    () => challengeAPI.recommend(),
    {
      select: (data) => {
        return data.data;
      },
      enabled: !!localStorage.getItem("user"),
    }
  );
};

export default useRecommendChallengeQuery;
