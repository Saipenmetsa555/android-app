import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => navigate("/createuser")}
        style={{
          marginLeft: "20px",
          margin: "10px",
          marginRight: "20px",
          height: "35px",
          backgroundColor: "#006ffd",
          borderWidth: "0px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Create User
      </button>
      <button
        onClick={() => {
          navigate("/approvaluser");
        }}
        style={{
          marginLeft: "20px",
          margin: "10px",
          marginRight: "20px",
          height: "35px",
          backgroundColor: "#006ffd",
          borderWidth: "0px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Approval User
      </button>
      <button
        onClick={() => {
          navigate("/addcategory");
        }}
        style={{
          marginLeft: "20px",
          margin: "10px",
          marginRight: "20px",
          height: "35px",
          backgroundColor: "#006ffd",
          borderWidth: "0px",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Add Category
      </button>
    </div>
  );
};

export default Users;
