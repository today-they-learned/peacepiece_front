import { useQuery } from "react-query";
import challengeAPI from "apis/challengeAPI";
import * as queryKeys from "constants/queryKeys";

const useChallengeQuery = (id: number) => {
  return useQuery([queryKeys.CHALLENGE_DATA, id], () => challengeAPI.get(id));
};

export default useChallengeQuery;