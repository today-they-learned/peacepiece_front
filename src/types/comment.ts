export type CommentInterface = {
  id: number;
  article_id: string;
  writer: {
    id: number;
    username: string;
    avatar: string;
  };
  content: string;
  created_at: string;
  updated_at: string;
};

export default CommentInterface;
