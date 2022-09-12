/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "react-query";
import userAPI from "apis/userAPI";

const useAddMailNotiMutation = (setUser: any) => {
  return useMutation(
    () => {
      return userAPI.mail.post();
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
