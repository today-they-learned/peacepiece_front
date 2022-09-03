import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";
// import { queryClient } from "config";
// import * as queryKeys from "constants/queryKeys";

const useAddArticle = () => {
  return useMutation(
    (payload: FormData) => {
      return articleAPI.post(payload);
    },
    {
      onSuccess: () => {
        // 쿼리 즉시 업데이트 (setQueryData 이용하여 response 데이터 즉시 추가)
        // queryClient.setQueryData([queryKeys.ARTICLE_LIST]);
      },
    }
  );
};

export default useAddArticle;
