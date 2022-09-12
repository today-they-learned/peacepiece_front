/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

const useDeleteMailNotiMutation = (setUser: any) => {
  return useMutation(
    () => {
      return authAPI.mail.delete();
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
