import { useMutation } from "react-query";
import userAPI from "apis/userAPI";
import { queryClient } from "config";
import * as queryKeys from "constants/queryKeys";
import { NotiType } from "types";

const useReadNotiMutation = () => {
  const queryKey = [queryKeys.NOTI_DATA];
  return useMutation(
    (id: number) => {
      return userAPI.noti.readOne(id);
    },
    {
      onMutate: (id: number) => {
        const oldData: { data: NotiType[] } =
          queryClient.getQueryData(queryKey);
        queryClient.cancelQueries(queryKey);
        oldData.data.forEach((noti: NotiType, index: number) => {
          if (noti.id === id) oldData.data[index].is_viewed = true;
        });
        queryClient.setQueryData(queryKey, oldData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );
};

export default useReadNotiMutation;
