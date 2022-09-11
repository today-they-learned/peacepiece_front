import { instance } from "config/api";

const itemAPI = {
  list: () => {
    return instance.get("items/");
  },
};

export default itemAPI;
