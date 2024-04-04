import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AdminHome = () => {
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
  const navigation = useNavigate();
  const delet = (info) => {
    Swal.fire({
      title: `${info.title}هل تريد الاستمرار في ازاله `,
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true,
    }).then((confirmation) => {
      console.log(confirmation);
      if (confirmation.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/product/${info.id}`,
        }).then(() => test());
      }
    });
  };
  return (
    <div>
      <div className="flex justify-center mb-10">
        <Button
          className="mt-[3em]"
          color="black"
          onClick={() => navigation("/admin/editPadge")}
        >
          Edite Items
        </Button>
      </div>
      {prod.map((data, index) => (
        <div key={index} className=" mx-7 ">
          <div className="bg-blue-gray-400 flex justify-between ">
            <div className="text-black-200 w-[30%] text-center font-extrabold ">
              <h1 className="mt-3">{data.title}</h1>
            </div>
            <h1 className="font-semibold mt-3 mb-3  ">{data.price}$</h1>

            <div className="mt-3 me-3 mb-3 ">
              <Button className="" color="red">
                <Link to={`/admin/${data.id}`}>View</Link>
              </Button>
              <Button className="" color="blue">
                <Link to={`/admin/edititems/${data.id}`} prod={prod}>
                  Edite
                </Link>
              </Button>
              <Button
                className=""
                color="light-green"
                onClick={() => delet(data)}
              >
                Delet
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminHome;
