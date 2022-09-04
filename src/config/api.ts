import axios from "axios";
import { baseUrl } from "constants/url";
import authAPI from "apis/authAPI";

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
  instance.interceptors.request.use(
    async (config) => {
      const accessToken = localStorage.getItem("access_token");
      const newConfig = { ...config };
      if (accessToken) {
        newConfig.headers.Authorization = `Bearer ${accessToken}`;
      }
      return newConfig;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  // token refresh 추가 예정
  instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
      const {
        config,
        response: { data },
      } = error;
      const res = data.error;
      if (res.status_code === 403 && res.details.code === "token_not_valid") {
        const originRequest = config;
        authAPI
          .refresh({ refresh: localStorage.getItem("refresh_token") })
          .then((data) => {
            localStorage.setItem("access_token", data.data.access);
            return instance.request(originRequest);
          })
          .catch(() => {
            window.location.href = "/sign";
          });
      }
    }
  );

  return props.children;
};

interface Props {
  children: React.ReactElement;
}

export { AxiosInterceptor, instance };
