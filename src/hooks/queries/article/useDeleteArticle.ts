import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";

const useDeleteArticle = () => {
  return useMutation((id: number) => {
    return articleAPI.delete(id);
  });
};

export default useDeleteArticle;
