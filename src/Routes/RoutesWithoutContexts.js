import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "Pages/Login";
function RoutesWithoutContexts() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default RoutesWithoutContexts;
