import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import authAPI from "apis/authAPI";
import { useCookies } from "react-cookie";

const useLoginMutation = () => {
  const [, setCookie] = useCookies(["access_token"]);
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
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 25);
        setCookie("access_token", data.access_token, { expires });
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate(-1);
      },
    }
  );
};

export default useLoginMutation;
