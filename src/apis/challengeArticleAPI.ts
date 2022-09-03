import { instance } from "config/api";

const challengeArticleAPI = {
  get: (challengeId: string, page: number) => {
    return instance.get(
      `articles/?challenge=${challengeId}&page=${page}&page_size=1`
    );
  },
};

export default challengeArticleAPI;
