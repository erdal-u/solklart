import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
    </HashRouter>
  );
}

export default App;
