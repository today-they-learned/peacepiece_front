import { QueryClient, useMutation } from "react-query";
import articleAPI from "apis/articleAPI";
import * as queryKeys from "constants/queryKeys";

const useAddArticle = () => {
  return useMutation(
    (payload: any) => {
      return articleAPI.post(payload);
    },
    {
      onSuccess: (data, variables, context) => {
        // 쿼리 즉시 업데이트 (내용추가)
        // QueryClient.setQueryData([queryKeys.CHALLENGE_ARTICLE_LIST]);
        console.log(data, variables, context);
      },
    }
  );
};

export default useAddArticle;
