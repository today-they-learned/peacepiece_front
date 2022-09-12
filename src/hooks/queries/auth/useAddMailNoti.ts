/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

const useAddMailNotiMutation = (setUser: any) => {
  return useMutation(
    () => {
      return authAPI.mail.post();
    },
    {
      onSuccess: () => {
        const user = JSON.parse(localStorage.getItem("user"));
        user.mail_notifiable = true;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      },
    }
  );
};

export default useAddMailNotiMutation;
