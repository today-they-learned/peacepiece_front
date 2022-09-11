import { instance } from "config/api";

const itemAPI = {
  list: () => {
    return instance.get("items/");
  },
  status: (userId: string | number) => {
    return instance.get(`users/${userId}/item_status/`);
  },
  buy: (itemId: string | number) => {
    return instance.post(`items/${itemId}/`);
  },
};

export default itemAPI;
