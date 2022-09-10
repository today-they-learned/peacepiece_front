/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";

const useAddArticle = (options?: any, challengeId?: any) => {
  return useMutation(
    (payload: FormData) => {
      return articleAPI.post(payload);
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        const queryKey = challengeId
          ? [queryKeys.CHALLENGE_ARTICLE_LIST, challengeId]
          : [queryKeys.ARTICLE_LIST];
        const oldData: { pages: any } = queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.pages[0].data.results.unshift(data);
        queryClient.setQueryData(queryKey, oldData);
      },
    }
  );
};

export default useAddArticle;
