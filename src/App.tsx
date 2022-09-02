import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AxiosInterceptor } from "config/api";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "styles/GlobalStyles";
import "styles/fonts.css";
import "semantic-ui-css/semantic.min.css";

import {
  Sign,
  NotFound,
  Island,
  Challenge,
  EndedChallenge,
  ChallengeOffer,
  Piece,
} from "pages";

import ResponsiveLayout from "layouts/responsive.layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Toaster position="top-center" />
      <AxiosInterceptor>
        <Router>
          <ResponsiveLayout>
            <Routes>
              <Route path="/" element={<Island />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/challenge" element={<Challenge />} />
              <Route path="/challenge/:id" element={<div />} />
              <Route path="/challenge/ended" element={<EndedChallenge />} />
              <Route path="/challenge/proposal" element={<ChallengeOffer />} />
              <Route path="/piece" element={<Piece />} />
              <Route path="/piece/:id" element={<div />} />
              <Route path="/piece/:keyword" element={<div />} />
              <Route path="/intro" element={<div />} />
              <Route path="/terms" element={<div />} />
              <Route path="/privacy" element={<div />} />
              <Route path="/team" element={<div />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </ResponsiveLayout>
        </Router>
      </AxiosInterceptor>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
