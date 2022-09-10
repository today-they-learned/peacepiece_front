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
  weekly: () => {
    return instance.get("challenges/weekly/");
  },
  ended: (page: number, pageSize: number) => {
    return instance.get(`challenges/ended/?page=${page}&page_size=${pageSize}`);
  },
};

export default challengeAPI;
