import { useMutation } from "react-query";
import userAPI from "apis/userAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";
import { NotiType } from "types";

const useReadNotiAllMutation = () => {
  const queryKey = [queryKeys.NOTI_DATA];
  return useMutation(
    () => {
      return userAPI.noti.readAll();
    },
    {
      onMutate: () => {
        const oldData: { data: NotiType[] } =
          queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.data.forEach((noti, index) => {
          if (!noti.is_viewed) oldData.data[index].is_viewed = true;
        });
        queryClient.setQueryData(queryKey, oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

export default useReadNotiAllMutation;
