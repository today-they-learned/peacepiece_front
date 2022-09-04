import { useInfiniteQuery } from "react-query";
import articleListAPI from "apis/articleListAPI";
import * as queryKeys from "constants/queryKeys";

const useArticleListQuery = () => {
  return useInfiniteQuery(
    [queryKeys.ARTICLE_LIST],
    ({ pageParam = 1 }) => articleListAPI.list(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.current_page;
        const totalPages = lastPage.data.total_pages;
        return currentPage < totalPages && currentPage + 1;
      },
      keepPreviousData: true,
      staleTime: 0,
    }
  );
};

export default useArticleListQuery;
