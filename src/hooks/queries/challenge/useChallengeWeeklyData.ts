import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeWeeklyQuery = () => {
  return useQuery(
    [queryKeys.CHALLENGE_WEEKLY_DATA],
    () => challengeAPI.weekly(),
    {
      select: (data) => {
        return data.data;
      },
    }
  );
};

export default useChallengeWeeklyQuery;
