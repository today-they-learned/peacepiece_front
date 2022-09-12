import { ArticleType, UserType } from "types";

type NotiInterface = {
  id: number;
  contributor: UserType;
  article: ArticleType;
  category: {
    id: number;
    title: string;
  };
  is_viewed: boolean;
  notice_category: string;
  created_at: string;
  updated_at: string;
};

export default NotiInterface;
