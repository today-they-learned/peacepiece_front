import { useCookies } from "react-cookie";

import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

interface Payload {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

const useSignUpMutation = (setErrMsg: Dispatch<SetStateAction<Payload>>) => {
  const [, setCookie] = useCookies(["access_token"]);

  const navigate = useNavigate();

  return useMutation(
    (payload: Payload) => {
      return authAPI.signUp(payload);
    },
    {
      onSuccess: ({ data }) => {
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 25);
        setCookie("access_token", data.access_token, { expires });
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate(-1);
      },
      onError: ({ response }) => {
        const { details } = response.data.error;
        setErrMsg({
          username: details?.username?.[0],
          email: details?.email?.[0],
          password1: details?.password1?.[0],
          password2: details?.non_field_errors?.[0],
        });
      },
    }
  );
};

export default useSignUpMutation;
