import React from "react";
import {
  OrderedListOutlined,
  UsergroupAddOutlined,
  HistoryOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        height: "10%",
        backgroundColor: "#006ffd",
      }}
    >
      {location.pathname === "/admin" ||
      location.pathname === "/users" ||
      location.pathname === "/createuser" ||
      location.pathname === "/approvaluser" ||
      location.pathname === "/addcategory" ? (
        <>
          <OrderedListOutlined
            onClick={() => {
              navigate("/admin");
            }}
            style={{
              color: `${location.pathname === "/admin" ? "#006ffd" : "white"}`,
              fontSize: "25px",
              //   border: "1px solid green",
              borderRadius: "8px",
              padding: "10px",
              paddingRight: "25px",
              paddingLeft: "25px",
              backgroundColor: `${
                location.pathname === "/admin" ? "white" : "#006ffd"
              }`,
            }}
          />
          <UsergroupAddOutlined
            onClick={() => {
              navigate("/users");
            }}
            style={{
              color: `${location.pathname === "/users" ? "#006ffd" : "white"}`,
              fontSize: "25px",
              //   border: "1px solid green",
              borderRadius: "8px",
              padding: "10px",
              paddingRight: "25px",
              paddingLeft: "25px",
              backgroundColor: `${
                location.pathname === "/users" ? "white" : "#006ffd"
              }`,
            }}
          />
        </>
      ) : (
        <>
          <FileAddOutlined
            onClick={() => {
              navigate("/");
            }}
            style={{
              color: `${location.pathname === "/" ? "#006ffd" : "white"}`,
              fontSize: "25px",
              //   border: "1px solid green",
              borderRadius: "8px",
              padding: "10px",
              paddingRight: "25px",
              paddingLeft: "25px",
              backgroundColor: `${
                location.pathname === "/" ? "white" : "#006ffd"
              }`,
            }}
          />
          <HistoryOutlined
            onClick={() => {
              navigate("/history");
            }}
            style={{
              color: `${
                location.pathname === "/history" ? "#006ffd" : "white"
              }`,
              fontSize: "25px",
              //   border: "1px solid green",
              borderRadius: "8px",
              padding: "10px",
              paddingRight: "25px",
              paddingLeft: "25px",
              backgroundColor: `${
                location.pathname === "/history" ? "white" : "#006ffd"
              }`,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
// dashboard #006ffd

//header #e2f6fd
