import { instance } from "config/api";

const challengeAPI = {
  get: (id: string) => {
    return instance.get(`challenges/${id}/`);
  },
  category: (keyword: string) => {
    return instance.get(`challenges/categories/?search=${keyword}`);
  },
  daily: () => {
    return instance.get("challenges/daily/");
  },
};

export default challengeAPI;
