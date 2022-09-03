import { instance } from "config/api";

const challengeAPI = {
  get: (id: number) => {
    return instance.get(`challenges/${id}/`);
  },
  category: (keyword: string) => {
    return instance.get(`challenges/categories/?search=${keyword}`);
  },
};

export default challengeAPI;
