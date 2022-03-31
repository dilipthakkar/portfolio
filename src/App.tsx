import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Router from "./router/routes";
import "./styles/gloabl-styles.css";
import store from "./features/store";
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>

      <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
