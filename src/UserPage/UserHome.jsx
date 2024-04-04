import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const UserHome = ({ prod }) => {
  console.log(prod);
  return (
    <div>
      <div className="flex justify-center mb-10"></div>
      {prod.map((data, index) => (
        <div key={index} className=" mx-7 ">
          <div className="bg-blue-gray-400 flex justify-between ">
            <div className="text-black-200 w-[30%] text-center font-extrabold ">
              <h1 className="mt-3">{data.title}</h1>
            </div>
            <h1 className="font-semibold mt-3 mb-3  ">{data.price}$</h1>

            <div className="mt-3 me-3 mb-3 ">
              <Button className=" " color="red">
                <Link to={`/${data.id}`}>View</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserHome;
