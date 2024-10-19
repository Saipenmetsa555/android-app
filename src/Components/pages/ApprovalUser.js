import React from "react";
import { useNavigate } from "react-router-dom";

const ApprovalUser = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
          height: "40px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>Tony </p>
        <button
          style={{
            height: "35px",
            margin: "5px",
            width: "100px",
            backgroundColor: "#006ffd",
            borderRadius: "8px",
            borderWidth: "0px",
            color: "white",
          }}
        >
          Add
        </button>
        <button
          style={{
            height: "35px",
            margin: "5px",
            width: "100px",
            backgroundColor: "#006ffd",
            borderRadius: "8px",
            borderWidth: "0px",
            color: "white",
          }}
        >
          Remove
        </button>
      </div>
      <button
        onClick={() => {
          navigate("/users");
        }}
        style={{
          height: "35px",
          margin: "5px",
          width: "100px",
          backgroundColor: "#006ffd",
          borderRadius: "8px",
          borderWidth: "0px",
          color: "white",
        }}
      >
        Back
      </button>
    </div>
  );
};

export default ApprovalUser;
