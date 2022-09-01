import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

const useSignUpMutation = () => {
  const navigate = useNavigate();

  interface Payload {
    username: string;
    email: string;
    password1: string;
    password2: string;
  }

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
    }
  );
};

export default useSignUpMutation;
