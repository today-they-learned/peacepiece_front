import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";

const useDeleteArticle = (id: number) => {
  return useMutation(() => {
    return articleAPI.delete(id);
  });
};

export default useDeleteArticle;
