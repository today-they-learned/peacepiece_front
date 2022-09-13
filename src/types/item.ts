import { ImageType, ItemCategoryType } from "types";

type ItemType = {
  id: number;
  name: string;
  category: ItemCategoryType;
  point: number;
  thumbnail: ImageType;
};

export default ItemType;
