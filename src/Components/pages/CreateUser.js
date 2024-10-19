import React from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
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
          <label>Role</label>
          <input
            style={{
              marginBottom: "20px",
              height: "35px",
              outline: "none",
              borderWidth: "0px",
              backgroundColor: "#e2e8f0",
            }}
            value={"ADMIN"}
            type="text"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>UserName</label>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <label>Password</label>
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
            Submit
          </button>
        </div>
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

export default CreateUser;
