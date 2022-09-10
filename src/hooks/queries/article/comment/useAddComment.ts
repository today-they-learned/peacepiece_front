/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import articleCommentApI from "apis/articleCommentAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";
import { ArticleType } from "types";
import { useParams } from "react-router-dom";

const useAddComment = (articleId: number) => {
  const { keyword } = useParams();
  return useMutation(
    (payload: { content: string }) => {
      return articleCommentApI.post(articleId, payload);
    },
    {
      onSuccess: ({ data }) => {
        const queryKey = [queryKeys.ARTICLE_LIST];
        if (keyword) queryKey.push(keyword);
        const oldData: { pages: any } = queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.pages.forEach((page: any) => {
          page.data.results.forEach((article: ArticleType) => {
            if (article.id === articleId) {
              article.article_comments.push(data);
            }
          });
        });
        queryClient.setQueryData(queryKey, oldData);
      },
    }
  );
};

export default useAddComment;
