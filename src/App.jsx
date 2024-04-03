import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div className="text-red-700">
      App
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
