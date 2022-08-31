import { useQuery } from "react-query";
import articleAPI from "apis/articleAPI";
import * as queryKeys from "constants/queryKeys";

const useArticleQuery = (id: number) => {
  return useQuery([queryKeys.ARTICLE_DATA, id], () => articleAPI.get(id));
};

export default useArticleQuery;
