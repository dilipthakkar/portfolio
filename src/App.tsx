import React, { useEffect } from "react";
import "./App.css";
import Router from "./router/routes";
import "./styles/gloabl-styles.css";

function App() {
  useEffect(() => {
    require("./script/blast-animation.js");
    require("./script/scroll-bar-width.js");
    require("./script/lion-logo-animation.js");
  }, []);

  return <Router />;
}

export default App;
