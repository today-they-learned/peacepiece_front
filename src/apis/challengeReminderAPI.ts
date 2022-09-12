import { instance } from "config/api";

const challengeReminderAPI = {
  get: () => {
    return instance.get("challenges/reminders/");
  },
  post: (categoryId: number) => {
    return instance.post("challenges/reminders/", { category_id: categoryId });
  },
  delete: (categoryId: number) => {
    return instance.delete("challenges/reminders/", {
      data: { category_id: categoryId },
    });
  },
};

export default challengeReminderAPI;
