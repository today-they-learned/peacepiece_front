import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import "styles/fonts.css";
import Main from "components/Main/Main";
import { Sign } from "pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
