import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

import Island from "components/Island/Island";
import Challenge from "components/Challenge/Challenge";
import Piece from "components/Piece/Piece";
import ResponsiveLayout from "layouts/responsive.layout";

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
          </Routes>
        </ResponsiveLayout>
      </Router>
    </>
  );
};

export default App;
