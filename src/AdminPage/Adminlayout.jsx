import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import AdminHome from "./AdminHome";
import EditPadge from "./EditPadge";
import ProductsDetails from "./ProductsDetails";
import Edititems from "./Edititems";
const Adminlayout = () => {
  return (
    <div>
      <div className="flex justify-center">
        <HeaderAdmin />
      </div>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/editPadge" element={<EditPadge />} />
        <Route path="edititems/:id" element={<Edititems />} />
        <Route path="/:id" element={<ProductsDetails />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;
