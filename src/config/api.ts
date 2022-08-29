import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "constants/url";

const createInstance = () => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
};

const instance = createInstance();

const AxiosInterceptor = (props: Props) => {
  useEffect(() => {
    instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("accessToken");
        const newConfig = { ...config };
        if (accessToken) {
          newConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return newConfig;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // token refresh 추가 예정
    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.respon.stauts === 403) {
          window.location.href = "/sign";
        }
        // if (error.response && error.response.status === 403) {
        //   return Auth.refreshToken()
        //     .then((token) => {
        //       originRequest.headers.Authorization = `Bearer ${token}`;
        //       return instance.request(error.config);
        //     })
        //     .catch((error) => {
        //       window.location.href = "/sign";
        //     });
        // }
      }
    );
  }, []);

  return props.children;
};

interface Props {
  children: React.ReactElement;
}

export { AxiosInterceptor, instance };
