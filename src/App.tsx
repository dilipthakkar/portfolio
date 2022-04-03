import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./router/routes";
import "./styles/gloabl-styles.css";
import store from "./features/store";
import { BrowserRouter , HashRouter } from "react-router-dom";
function App() { 

  return (
    <Provider store={store}>
    <HashRouter>

      <Router />
      </HashRouter>
    </Provider>
  );
}

export default App;
