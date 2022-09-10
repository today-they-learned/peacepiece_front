import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AxiosInterceptor, queryClient } from "config";
import { CookiesProvider } from "react-cookie";
import GlobalStyles from "styles/GlobalStyles";
import "styles/fonts.css";
import "semantic-ui-css/semantic.min.css";

import {
  Sign,
  NotFound,
  Island,
  Challenge,
  EndedChallenge,
  ChallengeSuggestion,
  Piece,
  ChallengeDetail,
  Test,
  PieceSearch,
  PieceDetail,
  Tos,
  ServiceIntro,
  CrewIntro,
} from "pages";

import ResponsiveLayout from "layouts/responsive.layout";
import Privacy from "pages/Privacy";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <GlobalStyles />
        <AxiosInterceptor>
          <Router>
            <ResponsiveLayout>
              <Routes>
                <Route path="/" element={<Island />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/challenge" element={<Challenge />} />
                <Route path="/challenge/:id" element={<ChallengeDetail />} />
                <Route path="/challenge/ended" element={<EndedChallenge />} />
                <Route
                  path="/challenge/suggestion"
                  element={<ChallengeSuggestion />}
                />
                <Route path="/piece" element={<Piece />} />
                <Route path="/piece/:id" element={<PieceDetail />} />
                <Route
                  path="/piece/search/:keyword"
                  element={<PieceSearch />}
                />
                <Route path="/intro" element={<ServiceIntro />} />
                <Route path="/terms" element={<Tos />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/team" element={<CrewIntro />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </ResponsiveLayout>
          </Router>
        </AxiosInterceptor>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </CookiesProvider>
    </QueryClientProvider>
  );
};

export default App;
