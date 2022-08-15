import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import "styles/fonts.css";
import "semantic-ui-css/semantic.min.css";

import { Sign, NotFound } from "pages";

import Island from "components/Island/Island";
import Challenge from "components/Challenge/Challenge";
import Piece from "components/Piece/Piece";
import ResponsiveLayout from "layouts/responsive.layout";
import EndedChallenge from "components/Challenge/EndedChallenge";
import ProposalChallenge from "components/Challenge/ProposalChallenge";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<Island />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/challenge/:id" element={<div />} />
            <Route path="/challenge/ended" element={<EndedChallenge />} />
            <Route path="/challenge/proposal" element={<ProposalChallenge />} />
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
    </>
  );
};

export default App;
