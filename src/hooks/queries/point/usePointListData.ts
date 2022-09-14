import { useInfiniteQuery } from "react-query";
import pointAPI from "apis/pointAPI";
import * as queryKeys from "constants/queryKeys";

const useArticleListQuery = () => {
  return useInfiniteQuery(
    [queryKeys.POINT_LIST],
    ({ pageParam = 1 }) => pointAPI.list(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage) {
          const currentPage = lastPage.data.current_page;
          const totalPages = lastPage.data.total_pages;
          return currentPage < totalPages && currentPage + 1;
        }
        return 1;
      },
      keepPreviousData: true,
    }
  );
};

export default useArticleListQuery;
