import { useMutation } from "react-query";
import articleAPI from "apis/articleAPI";

interface Payload {
  id: number;
  data: FormData;
}

const useUpdateArticle = () => {
  return useMutation((payload: Payload) => {
    return articleAPI.patch(payload.id, payload.data);
  });
};

export default useUpdateArticle;
