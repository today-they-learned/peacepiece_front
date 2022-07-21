import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";

import Main from "components/Main/Main";
import Island from "components/Island/Island";
import Challenge from "components/Challenge/Challenge";
import Piece from "components/Piece/Piece";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="island" element={<Island />} />
            <Route path="challenge" element={<Challenge />} />
            <Route path="piece" element={<Piece />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
