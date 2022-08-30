import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";

const useLoginMutation = () => {
  const navigate = useNavigate();

  interface Payload {
    email: string;
    password: string;
  }

  return useMutation(
    (payload: Payload) => {
      return authAPI.login(payload);
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

export default useLoginMutation;
