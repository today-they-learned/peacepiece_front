import { useQuery } from "react-query";
import itemAPI from "apis/itemAPI";
import * as queryKeys from "constants/queryKeys";

const useItemListQuery = () => {
  return useQuery([queryKeys.ITEMS_DATA], () => itemAPI.list());
};

export default useItemListQuery;
