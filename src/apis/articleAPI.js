import { instance } from "config/api";

const articleAPI = {
  get: (id) => {
    return instance.get(`articles/${id}/`);
  },
  post: (data) => {
    return instance.post("articles/", data);
  },
  patch: (id, data) => {
    return instance.patch(`articles/${id}/`, data);
  },
  delete: (id) => {
    return instance.delete(`articles/${id}/`);
  },
};

export default articleAPI;
