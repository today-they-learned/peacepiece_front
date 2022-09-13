/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import userAPI from "apis/userAPI";

const useDeleteMailNotiMutation = (setUser: any) => {
  return useMutation(
    () => {
      return userAPI.mail.delete();
    },
    {
      onSuccess: () => {
        const user = JSON.parse(localStorage.getItem("user"));
        user.mail_notifiable = false;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      },
    }
  );
};

export default useDeleteMailNotiMutation;
