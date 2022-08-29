import { instance } from "config/api";

const authAPI = {
  signUp: (data) => {
    return instance.post("users/", data);
  },

  signIn: (data) => {
    return instance.post("users/login/", data);
  },
};

export default authAPI;
