import { UserType } from "types";

type CommentInterface = {
  id: number | string;
  article_id: number | string;
  writer: UserType;
  content: string;
  created_at: string;
  updated_at: string;
};

export default CommentInterface;
