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
  const navigate = useNavigate();

  return useMutation(
    (payload: Payload) => {
      return authAPI.signUp(payload);
    },
    {
      onSuccess: ({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
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
