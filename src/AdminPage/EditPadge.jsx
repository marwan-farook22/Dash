import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const EditPadge = () => {
  const [newprod, setNewProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const navigation = useNavigate();
  const loadData = () => {
    axios({
      method: "post",
      url: "http://localhost:3000/product",
      data: newprod,
    }).then(() => {
      navigation("/admin/");
    });
  };
  return (
    <div className="bg-black ">
      <h1 className="text-center mt-[3em] text-white text-4xl mb-7 font-extrabold ">
        Make A new products
      </h1>
      <div className="w-full h-[50vh]  flex items-center  justify-center ">
        <div className="w-[50%] ">
          <div className="mb-[1em]">
            {" "}
            <label className="input input-bordered flex items-center ">
              <input
                type="text"
                className="grow"
                placeholder="title"
                value={newprod.title}
                onChange={(e) =>
                  setNewProduct({ ...newprod, title: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            {" "}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="price"
                value={newprod.price}
                onChange={(e) =>
                  setNewProduct({ ...newprod, price: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-3 mb-3">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="description"
                value={newprod.description}
                onChange={(e) =>
                  setNewProduct({ ...newprod, description: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-3 mb-3">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="category"
                value={newprod.category}
                onChange={(e) =>
                  setNewProduct({ ...newprod, category: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-3 mb-3">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="image"
                value={newprod.image}
                onChange={(e) =>
                  setNewProduct({ ...newprod, image: e.target.value })
                }
              />
            </label>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="btn"
              onClick={loadData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPadge;
``;
