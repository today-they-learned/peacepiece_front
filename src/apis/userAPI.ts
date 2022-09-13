import { instance } from "config/api";

const userAPI = {
  mail: {
    post: () => {
      return instance.post("users/mail_notifiable/");
    },
    delete: () => {
      return instance.delete("users/mail_notifiable/");
    },
  },
  noti: {
    get: () => {
      return instance.get("notifications/");
    },
    readAll: () => {
      return instance.post("notifications/");
    },
    readOne: (id: number) => {
      return instance.post(`notifications/${id}/`);
    },
  },
};

export default userAPI;
