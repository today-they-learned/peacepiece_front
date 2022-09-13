import { useQuery } from "react-query";
import itemAPI from "apis/itemAPI";
import * as queryKeys from "constants/queryKeys";

const useItemStatusQuery = (userId: string | number) => {
  return useQuery([queryKeys.ITEM_STATUS, userId], () =>
    itemAPI.status(userId)
  );
};

export default useItemStatusQuery;
