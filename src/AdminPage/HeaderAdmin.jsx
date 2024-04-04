import React from "react";
import { useNavigate } from "react-router-dom";
const HeaderAdmin = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="join">
        <button className="join-item btn" onClick={() => navigation("/")}>
          UserHome
        </button>
        <button
          className="join-item btn btn-active "
          onClick={() => navigation("/admin/editPadge")}
        >
          Edit page
        </button>
        <button className="join-item btn" onClick={() => navigation("/admin/")}>
          AdminHome
        </button>
      </div>
    </div>
  );
};

export default HeaderAdmin;
