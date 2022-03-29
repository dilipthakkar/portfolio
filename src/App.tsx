import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./router/routes";
import "./styles/gloabl-styles.css";
import store from "./features/store";
function App() {
  useEffect(() => {
    require("./script/blast-animation.js");
    require("./script/scroll-bar-width.js");
    require("./script/lion-logo-animation.js");
    require("./script/scroll-animation.js");
    
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
