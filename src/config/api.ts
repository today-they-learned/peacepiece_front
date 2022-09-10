import axios from "axios";
import { baseUrl } from "constants/url";
import { useUser, useToken } from "hooks";
import { useCookies } from "react-cookie";

const createInstance = () => {
  return axios.create({
    baseURL: baseUrl,
    timeout: 2000,
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
};

const instance = createInstance();

// type callbackFunction = (token: string) => void;

// let isTokenRefreshing = false;
// const refreshSubscribers: callbackFunction[] = [];

// const onTokenRefreshed = (accessToken: string) => {
//   refreshSubscribers.map((callback: callbackFunction) => callback(accessToken));
// };
// const addRefreshSubscriber = (callback: callbackFunction) => {
//   refreshSubscribers.push(callback);
// };

const AxiosInterceptor = (props: Props) => {
  const [cookie, setCookie] = useCookies(["access_token"]);

  instance.interceptors.request.use(
    // token refresh
    async (config) => {
      const newConfig = { ...config };
      const accessToken = cookie.access_token;
      const { user } = useUser();
      if (user) {
        if (!!accessToken) {
          newConfig.headers.Authorization = `Bearer ${accessToken}`;
        } else {
          const { refresh } = useToken();
          const refreshInstance = createInstance();
          await refreshInstance
            .post("users/token/refresh/", { refresh })
            .then((data) => {
              const newAccess = data.data.access;
              const expires = new Date();
              expires.setMinutes(expires.getMinutes() + 25);
              setCookie("access_token", newAccess, { expires });
              newConfig.headers.Authorization = `Bearer ${newAccess}`;
            });
        }
      }
      return newConfig;
    },

    async (error) => {
      return Promise.reject(error);
    }
  );

  // // token refresh
  // instance.interceptors.response.use(
  //   async (response) => response,
  //   async (error) => {
  //     const {
  //       config,
  //       response: { data },
  //     } = error;
  //     const res = data.error;
  //     const originalRequest = config;

  //     // 토큰 만료시 refresh 요청
  //     if (res.status_code === 403 && res.details.code === "token_not_valid") {
  //       if (!isTokenRefreshing) {
  //         isTokenRefreshing = true;
  //         await authAPI
  //           .refresh({ refresh: localStorage.getItem("refresh_token") })
  //           .then((data) => {
  //             const expires = new Date();
  //             expires.setMinutes(expires.getMinutes() + 25);
  //             setCookie("access_token", data.data.access, { expires });
  //             isTokenRefreshing = false;
  //             // 쌓인 요청 새 토큰으로 실행
  //             config.headers.Authorization = `Bearer ${data.data.access}`;
  //             axios(config);
  //             onTokenRefreshed(data.data.access);
  //           })
  //           .catch(() => {
  //             window.location.href = "/sign";
  //           });
  //       }

  //       // token 재발급 될 동안 쌓인 요청 저장
  //       const retryOriginalRequest = new Promise((resolve) => {
  //         addRefreshSubscriber((accessToken: string) => {
  //           originalRequest.headers.Authorization = `Bearer ${accessToken}`;
  //           resolve(axios(originalRequest));
  //         });
  //       });
  //       return retryOriginalRequest;
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return props.children;
};

interface Props {
  children: React.ReactElement;
}

export { AxiosInterceptor, instance };
