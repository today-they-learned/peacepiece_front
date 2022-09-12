import { instance } from "config/api";
import { ChallengeSuggestionType } from "types";

const challengeSuggestionAPI = {
  get: (id: string) => {
    return instance.get(`challenges/suggestions/${id}/`);
  },
  post: (data: ChallengeSuggestionType) => {
    return instance.post("challenges/suggestions/", data);
  },
  patch: (id: string, data: FormData) => {
    return instance.patch(`challenges/suggestions/${id}/`, data);
  },
  delete: (id: string) => {
    return instance.delete(`challenges/suggestion/${id}/`);
  },
  list: {
    get: (page: number, pageSize: number) => {
      return instance.get(
        `challenges/suggestions/?page=${page}&page_size=${pageSize}`
      );
    },
  },
  feedback: {
    post: (id: number) => {
      return instance.post(`challenges/suggestions/${id}/feedbacks/`);
    },
    delete: (id: number) => {
      return instance.delete(`challenges/suggestions/${id}/feedbacks/`);
    },
  },
};

export default challengeSuggestionAPI;
