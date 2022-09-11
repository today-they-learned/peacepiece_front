/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import challengeReminderAPI from "apis/challengeReminderAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";
import { ReminderType } from "types";

const useDeleteChallengeReminderMutation = (options?: any) => {
  const queryKey = queryKeys.CHALLENGE_REMINDER_DATA;

  return useMutation(
    (categoryId?: number) => {
      return challengeReminderAPI.delete(categoryId);
    },
    {
      ...options,
      onMutate: (data, categoryId?: number) => {
        queryClient.cancelQueries(queryKey);
        const oldData: { data: any } = queryClient.getQueryData(queryKey);
        oldData.data.forEach((reminders: ReminderType, index: number) => {
          if (reminders.category.id === categoryId) {
            oldData.data.splice(index, 1);
          }
        });
        queryClient.setQueryData(queryKey, oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
        queryClient.invalidateQueries(queryKeys.CHALLENGE_CATEGORY_DATA);
      },
    }
  );
};

export default useDeleteChallengeReminderMutation;
