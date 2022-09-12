import { queryClient } from "config";
import Loading from "pages/Loading";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <React.Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <App />
        <div id="modal-root" />
      </QueryClientProvider>
    </React.Suspense>
  </StrictMode>
);
