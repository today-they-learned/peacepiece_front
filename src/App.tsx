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
import ServiceIntro from "components/Footbar/ServiceIntro";
import Term from "components/Footbar/Term";
import Privacy from "components/Footbar/Privacy";
import CrewIntro from "components/Footbar/CrewIntro";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ResponsiveLayout>
          <Routes>
            <Route path="/" element={<Island />} />
            <Route path="challenge" element={<Challenge />} />
            <Route path="piece" element={<Piece />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/serviceintro" element={<ServiceIntro />} />
            <Route path="/term" element={<Term />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/crewintro" element={<CrewIntro />} />
          </Routes>
        </ResponsiveLayout>
      </Router>
    </>
  );
};

export default App;
