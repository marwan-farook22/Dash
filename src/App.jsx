import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./UserPage/Userlayout";
import Adminlayout from "./AdminPage/Adminlayout";
import axios from "axios";
import { useState } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Userlayout />} />
      <Route path="/admin/*" element={<Adminlayout />} />
    </Routes>
  );
};

export default App;
