import { instance } from "config/api";

const pointAPI = {
  current: () => {
    return instance.get("users/point/");
  },
  list: (page: number) => {
    return instance.get(`points/my/?page=${page}`);
  },
};

export default pointAPI;
