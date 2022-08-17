import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import "styles/fonts.css";
import "semantic-ui-css/semantic.min.css";

import { Sign } from "pages";

import Island from "components/Island/Island";
import Challenge from "components/Challenge/Challenge";
import Piece from "components/Piece/Piece";
import ResponsiveLayout from "layouts/responsive.layout";
import EndedChallenge from "components/Challenge/EndedChallenge";
import ChallengeOffer from "components/Challenge/ChallengeOffer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<Island />} />
            <Route path="piece" element={<Piece />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="challenge" element={<Challenge />} />
            <Route path="proposal_challenge" element={<ChallengeOffer />} />
            <Route path="ended_challenge" element={<EndedChallenge />} />
          </Routes>
        </ResponsiveLayout>
      </Router>
    </>
  );
};

export default App;
