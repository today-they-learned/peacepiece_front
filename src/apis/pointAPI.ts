import { instance } from "config/api";

const pointAPI = {
  list: (page: number) => {
    return instance.get(`points/my/?page=${page}`);
  },
};

export default pointAPI;
