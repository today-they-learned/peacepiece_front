import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";

const useUpdateArticle = (id: number) => {
  return useMutation((payload: FormData) => {
    return articleAPI.patch(id, payload);
  });
};

export default useUpdateArticle;
