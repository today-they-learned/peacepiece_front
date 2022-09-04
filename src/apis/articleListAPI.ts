import { instance } from "config/api";

const articleListAPI = {
  list: (page: number) => {
    return instance.get(`articles/?page=${page}`);
  },
  search: (page: number, keyword: string) => {
    return instance.get(`articles/?search=${keyword}&page=${page}`);
  },
};

export default articleListAPI;
