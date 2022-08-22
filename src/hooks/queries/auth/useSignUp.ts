import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

export const useSignUp = () => {
  const navigate = useNavigate();

  interface Payload {
    email: string;
    password1: string;
    password2: string;
  }

  return useMutation(
    (payload: Payload) => {
      return authAPI.signUp(payload);
    },
    {
      onSuccess: () => {
        navigate("/");
      },
    }
  );
};
