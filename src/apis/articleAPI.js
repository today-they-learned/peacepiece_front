import { instance } from "config/api";

const articleAPI = {
  get: (id) => {
    return instance.get(`articles/${id}`);
  },
};

export default articleAPI;
