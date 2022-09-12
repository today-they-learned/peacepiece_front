import { useQuery } from "react-query";
import challengeReminderAPI from "apis/challengeReminderAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeReminderQuery = () => {
  return useQuery(
    [queryKeys.CHALLENGE_REMINDER_DATA],
    () => challengeReminderAPI.get(),
    {
      staleTime: 0,
      select: (data) => {
        return data.data;
      },
    }
  );
};

export default useChallengeReminderQuery;
