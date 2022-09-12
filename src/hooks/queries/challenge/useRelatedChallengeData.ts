import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useRelatedChallengeQuery = (challengeId: string) => {
  return useQuery(
    [queryKeys.CHALLENGE_RECOMMEND_LIST],
    () => challengeAPI.related(challengeId),
    {
      select: (data) => {
        return data.data;
      },
    }
  );
};

export default useRelatedChallengeQuery;
