/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import challengeSuggestionAPI from "apis/challengeSuggestionAPI";
import { ChallengeSuggestionType } from "types";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";

const useAddChallengeSuggestion = (options?: any) => {
  return useMutation(
    (payload: ChallengeSuggestionType) => {
      return challengeSuggestionAPI.post(payload);
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        const queryKey = [queryKeys.CHALLENGE_SUGGESTION_LIST];
        const oldData: { pages: any } = queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.pages[0].data.results.unshift(data);
        queryClient.setQueryData(queryKey, oldData);
      },
    }
  );
};

export default useAddChallengeSuggestion;
