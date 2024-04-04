import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edititems = () => {
  const [thedata, setData] = useState(null);

  //     price: 0,
  //     description: "",
  //     category: "",
  //     image: "",
  //     rating: {
  //       rate: 0,
  //       count: 0,
  //     },
  //   });
  const { id } = useParams();
  const navigation = useNavigate();

  const mydata = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/product/${id}`,
    }).then((info) => setData(info.data));
  };
  const handleEdite = (data) => {
    axios({
      method: "put",
      url: `http://localhost:3000/product/${id}`,
      data: {
        ...thedata,
      },
    }).then(() => navigation("/admin/"));
  };
  useEffect(() => {
    mydata();
  }, []);
  return (
    <div className="bg-gray-700 mt-[4em]">
      <h1 className="text-center mt-[3em] text-white text-4xl mb-7 font-extrabold">
        Edite in product
      </h1>
      <div className="w-full h-[50vh]  flex items-center  justify-center ">
        <div className="w-[50%]">
          <div className="mt-5 mb-5">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="title"
                value={thedata?.title}
                onChange={(e) => setData({ ...thedata, title: e.target.value })}
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
                value={thedata?.price}
                onChange={(e) => setData({ ...thedata, price: e.target.value })}
              />
            </label>
          </div>
          <div className="mt-5 mb-5">
            {" "}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="description"
                value={thedata?.description}
                onChange={(e) =>
                  setData({ ...thedata, description: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-5 mb-5">
            {" "}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="category"
                value={thedata?.category}
                onChange={(e) =>
                  setData({ ...thedata, category: e.target.value })
                }
              />
            </label>
          </div>
          <div className="mt-5 mb-5">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="image"
                value={thedata?.image}
                onChange={(e) => setData({ ...thedata, image: e.target.value })}
              />
            </label>
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Submit"
              className="btn"
              onClick={handleEdite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edititems;
