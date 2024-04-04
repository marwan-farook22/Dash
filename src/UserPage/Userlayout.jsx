import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserHome from "./UserHome";
import Headeruser from "./Headeruser";
import ProductHomeDetails from "./ProductHomeDetails";

const Userlayout = () => {
  const [prod, setProd] = useState([]);

  const test = () => {
    axios({
      method: "get",
      url: " http://localhost:3000/product",
    }).then((result) => {
      setProd(result.data);
    });
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <div>
      <Headeruser />
      <Routes>
        <Route path="/" element={<UserHome prod={prod} />} />
        <Route path="/:id" element={<ProductHomeDetails />} />
      </Routes>
    </div>
  );
};

export default Userlayout;
