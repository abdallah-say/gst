import React from "react";
import { Routes, Route } from "react-router-dom";
import { CategoriesProvider } from "Contexts/CategoriesContext";
import { Authenticated } from "Utilities/Authentication";
import Admin from "Pages/Admin";
import Products from "Components/Admin/Products";
import Staff from "Components/Admin/Staff";

function RoutesWithContexts() {
  return (
    <CategoriesProvider>
      <Authenticated />
      <Routes>
        <Route path="/admin/*" element={<Admin />}>
          <Route path="products" element={<Products />} />
          <Route path="staff" element={<Staff />} />
        </Route>
      </Routes>
    </CategoriesProvider>
  );
}

export default RoutesWithContexts;
