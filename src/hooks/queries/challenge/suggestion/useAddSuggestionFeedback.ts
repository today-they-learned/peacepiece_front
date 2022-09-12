/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import challengeSuggestionAPI from "apis/challengeSuggestionAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";
import { ChallengeSuggestionType } from "types";

const useAddSuggestionFeedbackMuation = (
  suggestionId: number,
  main?: boolean
) => {
  return useMutation(
    () => {
      return challengeSuggestionAPI.feedback.post(suggestionId);
    },
    {
      onSuccess: () => {
        const queryKey = [queryKeys.CHALLENGE_SUGGESTION_LIST];
        if (main) queryKey.push("main");
        const oldData: { pages: any } = queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.pages.forEach((page: any) => {
          page.data.results.forEach(
            (suggestion: ChallengeSuggestionType, index: number) => {
              if (suggestion.id === suggestionId) {
                const oldSuggestion = { ...suggestion };
                oldSuggestion.feedback_count += 1;
                oldSuggestion.is_feedbacked = true;
                page.data.results.splice(index, 1, oldSuggestion);
              }
            }
          );
        });
        queryClient.setQueryData(queryKey, oldData);
      },
    }
  );
};

export default useAddSuggestionFeedbackMuation;
