import { useInfiniteQuery } from "react-query";
import articleListAPI from "apis/articleListAPI";
import * as queryKeys from "constants/queryKeys";

const useArticleSearchQuery = (keyword: string) => {
  return useInfiniteQuery(
    [queryKeys.ARTICLE_LIST, keyword],
    ({ pageParam = 1 }) => articleListAPI.search(pageParam, keyword),
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

export default useArticleSearchQuery;
