import { useQuery } from "react-query";
import pointAPI from "apis/pointAPI";
import * as queryKeys from "constants/queryKeys";

const useCurrentPointQuery = () => {
  return useQuery([queryKeys.CURRENT_POINT_DATA], () => pointAPI.current());
};

export default useCurrentPointQuery;
