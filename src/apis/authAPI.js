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

  mail: {
    post: () => {
      return instance.post("users/mail_notifiable/");
    },
    delete: () => {
      return instance.delete("users/mail_notifiable/");
    },
  },
};

export default authAPI;
