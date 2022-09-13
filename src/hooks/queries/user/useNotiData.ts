import { useQuery } from "react-query";
import userAPI from "apis/userAPI";
import * as queryKeys from "constants/queryKeys";

const useNotiQuery = () => {
  return useQuery([queryKeys.NOTI_DATA], () => userAPI.noti.get(), {
    select: (data) => {
      return data.data;
    },
    enabled: !!localStorage.getItem("user"),
    staleTime: 0,
  });
};

export default useNotiQuery;
