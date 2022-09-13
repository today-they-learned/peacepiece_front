import { useMutation } from "react-query";
import itemAPI from "apis/itemAPI";
import useUser from "hooks/useUser";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";

const useBuyItemMutation = () => {
  return useMutation(
    (payload: { itemId: number }) => itemAPI.buy(payload.itemId),
    {
      onSuccess: () => {
        const { user } = useUser();
        queryClient.invalidateQueries([queryKeys.ITEM_STATUS, user.id]);
        queryClient.invalidateQueries(queryKeys.ITEMS_DATA);
      },
    }
  );
};

export default useBuyItemMutation;
