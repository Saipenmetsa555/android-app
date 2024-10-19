import React from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  // addcategory
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div style={{}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>Category</label>
          <input
            style={{
              marginBottom: "20px",
              height: "35px",
              outline: "none",
              borderWidth: "0px",
              backgroundColor: "#e2e8f0",
            }}
            type="text"
          />
        </div>
        {/* two */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>Item</label>
          <input
            style={{
              marginBottom: "20px",
              height: "35px",
              outline: "none",
              borderWidth: "0px",
              backgroundColor: "#e2e8f0",
            }}
            type="text"
          />
        </div>
        {/* three */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>Rate</label>
          <input
            style={{
              marginBottom: "20px",
              height: "35px",
              outline: "none",
              borderWidth: "0px",
              backgroundColor: "#e2e8f0",
            }}
            type="text"
          />
        </div>
        {/* four */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>Average</label>
          <input
            style={{
              marginBottom: "20px",
              height: "35px",
              outline: "none",
              borderWidth: "0px",
              backgroundColor: "#e2e8f0",
            }}
            type="text"
          />
        </div>
        <div style={{ textAlign: "center" }}>
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
            Add Category
          </button>
        </div>
      </div>
      {/* ======= */}
      <div>
        <button
          style={{
            height: "35px",
            margin: "5px",
            width: "100px",
            backgroundColor: "#006ffd",
            borderRadius: "8px",
            borderWidth: "0px",
            color: "white",
            marginLeft: "10px",
          }}
          onClick={() => {
            navigate("/users");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
