import React from "react";
import { Link } from "react-router-dom";

const Headeruser = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="navbar bg-base-300 flex justify-evenly">
        <button className="join-item btn btn-outline">
          <Link to="/">Previous page</Link>
        </button>
        <button className="join-item btn btn-outline">
          <Link to="/admin"> admin</Link>
        </button>
      </div>
      <h1 className="text-3xl text-black font-semibold ">Welcome Home </h1>
    </div>
  );
};

export default Headeruser;
