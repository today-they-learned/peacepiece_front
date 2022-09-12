import { queryClient } from "config";
import PageLoading from "pages/PageLoading";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <React.Suspense fallback={<PageLoading />}>
      <QueryClientProvider client={queryClient}>
        <App />
        <div id="modal-root" />
      </QueryClientProvider>
    </React.Suspense>
  </StrictMode>
);
