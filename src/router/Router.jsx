import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "../pages/home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
