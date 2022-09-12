/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import challengeReminderAPI from "apis/challengeReminderAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";

const useAddChallengeReminderMutation = (options?: any) => {
  return useMutation(
    (categoryId?: number) => {
      return challengeReminderAPI.post(categoryId);
    },
    {
      ...options,
      onSettled: () => {
        queryClient.invalidateQueries(queryKeys.CHALLENGE_REMINDER_DATA);
      },
    }
  );
};

export default useAddChallengeReminderMutation;
