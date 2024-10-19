import React from "react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>History</h1>
          <div
            onClick={() => {
              navigate("/tracking");
            }}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              // border: "2px solid green",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              width: "90%",
              height: "150px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2>Fish</h2>
              {/* <h4>Fish</h4> */}
            </div>
            {/* <div style={{ display: "flex", flexDirection: "column" }}>
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
                Approve
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
                Reject
              </button>
            </div> */}
          </div>
          {/* ================= box 2 */}
          <div
            onClick={() => {
              navigate("/tracking");
            }}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              // border: "2px solid green",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              width: "90%",
              marginBottom: "20px",
              height: "150px",
            }}
          >
            <div>
              {/* <h3>Suraj</h3> */}
              <h2>Prawn</h2>
            </div>
            {/* <div style={{ display: "flex", flexDirection: "column" }}>
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
                Approve
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
                Reject
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
