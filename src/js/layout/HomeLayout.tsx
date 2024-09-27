import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";

const HomeLayout = () => (
  <div className="h-screen w-screen overflow-hidden">
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default HomeLayout;