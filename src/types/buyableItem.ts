import { ImageType, ItemType, ItemCategoryType } from "types";

type PreConditionType = {
  id: number;
  item: ItemType;
  priority?: number;
  max_count?: number;
};

// NOTE: reason
// 1: 아직 조건을 달성 안함.
// 2: 최대 개수 구매
// 3: 포인트 부족
// 999: 구매 가능
type BuyableContextType = {
  buyable: boolean;
  reason: number;
  lack_point: number; // 부족한 포인트
  pre_condition?: PreConditionType;
};

type BuyableItemType = {
  id: number;
  name: string;
  category: ItemCategoryType;
  point: number;
  thumbnail: ImageType;
  buyable_context?: BuyableContextType;
};

export default BuyableItemType;
