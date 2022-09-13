import { UserType, ChallengeType, ItemType } from "types";

type PointCategoryType = "buy_item" | "prove_challenge";

type PointType = {
  id: number;
  amount: number;
  challenge: ChallengeType;
  user: UserType;
  item: ItemType;
  category: PointCategoryType;
  created_at: string;
  updated_at: string;
};

export default PointType;