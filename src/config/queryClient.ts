import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
    },
    mutations: {
      retry: 0,
    },
  },
});
