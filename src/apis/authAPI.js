import { instance } from "config/api";

const authAPI = {
  signUp: (data) => {
    return instance.post("user/", data);
  },

  signIn: (data) => {
    return instance.post("user/login/", data);
  },
};

export default authAPI;
