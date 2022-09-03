import { instance } from "config/api";

const challengeSuggestionAPI = {
  get: (id: string) => {
    return instance.get(`challenges/suggestions/${id}/`);
  },
  post: (data: FormData) => {
    return instance.post("challenges/suggestions/", data);
  },
  patch: (id: string, data: FormData) => {
    return instance.patch(`challenges/suggestions/${id}/`, data);
  },
  delete: (id: string) => {
    return instance.delete(`challenges/suggestion/${id}/`);
  },
  list: {
    get: (page: number) => {
      return instance.get(`challenges/suggestions/?page=${page}`);
    },
  },
  feedback: {
    post: (id: string) => {
      return instance.post(`challenges/suggestions/${id}/feedbacks/`);
    },
    delete: (id: string) => {
      return instance.delete(`challenges/suggestions/${id}/feedbacks/`);
    },
  },
};

export default challengeSuggestionAPI;
