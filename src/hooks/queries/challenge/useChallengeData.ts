import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeQuery = (id: string) => {
  return useQuery([queryKeys.CHALLENGE_DATA, id], () => challengeAPI.get(id), {
    select: (data) => {
      return data.data;
    },
  });
};

export default useChallengeQuery;
