import { instance } from "config/api";

const challengeArticleAPI = {
  get: (challengeId: string, page: number) => {
    return instance.get(`articles/?challenge=${challengeId}&page=${page}`);
  },
};

export default challengeArticleAPI;
