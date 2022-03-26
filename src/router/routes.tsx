import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
