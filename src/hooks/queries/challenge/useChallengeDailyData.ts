import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeDailyQuery = () => {
  return useQuery(
    [queryKeys.CHALLENGE_DAILY_DATA],
    () => challengeAPI.daily(),
    {
      select: (data) => {
        return data.data;
      },
    }
  );
};

export default useChallengeDailyQuery;
