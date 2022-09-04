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

type callbackFunction = (token: string) => void;

let isTokenRefreshing = false;
const refreshSubscribers: callbackFunction[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback: callbackFunction) => callback(accessToken));
};
const addRefreshSubscriber = (callback: callbackFunction) => {
  refreshSubscribers.push(callback);
};

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

  // token refresh
  instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
      const {
        config,
        response: { data },
      } = error;
      const res = data.error;
      const originalRequest = config;

      // 토큰 만료시 refresh 요청
      if (res.status_code === 403 && res.details.code === "token_not_valid") {
        if (!isTokenRefreshing) {
          isTokenRefreshing = true;
          await authAPI
            .refresh({ refresh: localStorage.getItem("refresh_token") })
            .then((data) => {
              localStorage.setItem("access_token", data.data.access);
              isTokenRefreshing = false;
              // 쌓인 요청 새 토큰으로 실행
              config.headers.Authorization = `Bearer ${data.data.access}`;
              axios(config);
              onTokenRefreshed(data.data.access);
            })
            .catch(() => {
              window.location.href = "/sign";
            });
        }

        // token 재발급 될 동안 쌓인 요청 저장
        const retryOriginalRequest = new Promise((resolve) => {
          addRefreshSubscriber((accessToken: string) => {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
      return Promise.reject(error);
    }
  );

  return props.children;
};

interface Props {
  children: React.ReactElement;
}

export { AxiosInterceptor, instance };
