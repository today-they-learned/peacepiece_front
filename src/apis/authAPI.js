import { instance } from "config/api";

const authAPI = {
  signUp: (data) => {
    return instance.post("users/", data);
  },

  login: (data) => {
    return instance.post("users/login/", data);
  },

  refresh: (data) => {
    return instance.post("users/token/refresh/", data);
  },
};

export default authAPI;
