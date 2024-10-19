import React from "react";
import { useNavigate } from "react-router-dom";
import TimeLine from "../TimeLine";

const Orders = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "60vh",
          border: "2px solid skyblue",
          marginTop: "20px",
        }}
      >
        <p>Name: Rahul</p>
        <p>Ordered Items: Fish</p>
        <p>Quantity: 3kgs</p>
        <p>Address: ASR Nagar 534192</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TimeLine />
        </div>
      </div>
      <button
        onClick={() => {
          navigate("/admin");
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
        back
      </button>
    </div>
  );
};

export default Orders;
