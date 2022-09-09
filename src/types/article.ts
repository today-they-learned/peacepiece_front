import { ChallengeType, CommentType, ImageType } from "types";

type ArticleInterface = {
  id: number;
  challenge: ChallengeType;
  content: string;
  created_at: string;
  writer: {
    id: number;
    username: string;
    avatar: string;
  };
  images: Array<ImageType>;
  article_comments: CommentType[];
};

export default ArticleInterface;
