import { useMutation } from "react-query";
import challengeSuggestionAPI from "apis/challengeSuggestionAPI";
import { ChallengeSuggestionType } from "types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAddChallengeSuggestion = (options: any) => {
  return useMutation(
    (payload: ChallengeSuggestionType) => {
      return challengeSuggestionAPI.post(payload);
    },
    {
      ...options,
    }
  );
};

export default useAddChallengeSuggestion;
