import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";

const useAddArticleFeedbackMutation = (articleId: string) => {
  const { keyword } = useParams();
  return useMutation(
    (emoji: string) => {
      return articleAPI.feedback.post(articleId, emoji);
    },
    {
      onSuccess: () => {
        const queryKey = [queryKeys.ARTICLE_LIST];
        if (keyword) queryKey.push(keyword);
        queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

export default useAddArticleFeedbackMutation;
