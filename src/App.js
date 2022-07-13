import React from "react";
import GlobalStyles from "./Global";
import Paths from "./components/Route";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Paths />} />
          <Route path="/:category" element={<Paths />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
