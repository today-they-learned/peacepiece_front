import { CommentType } from "types";

export type CommentsInterface = {
  count: number;
  next: string;
  previous: string;
  results: Array<CommentType>;
};

export default CommentsInterface;
