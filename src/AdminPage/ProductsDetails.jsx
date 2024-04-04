import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductsDetails = () => {
  const [data, setdata] = useState(null);
  const { id } = useParams();
  const details = () => {
    axios({
      method: "get",
      url: ` http://localhost:3000/product/${id}`,
    }).then((info) => {
      setdata(info.data);
    });
  };
  useEffect(() => {
    details();
  }, []);
  return (
    <div className="flex justify-center mt-10 ">
      <div className="card-actions text-white w-96 bg-blue-gray-500 shadow-2xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{data?.category}</h2>
          <p className=""> {data?.description}</p>
          <p>{`Price ${data?.price} $`}</p>
        </div>
        <figure>
          <img src={`${data?.image}`} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default ProductsDetails;
