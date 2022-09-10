import { instance } from "config/api";

const articleCommentApI = {
  post: (articleId: number, data: { content: string }) => {
    return instance.post(`articles/${articleId}/comments/`, data);
  },
};

export default articleCommentApI;
