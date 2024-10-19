import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import "./Container.css";
// import Body from "./Body";

const Container = () => {
  return (
    <div className="container-bg">
      <Header />
      <div className="body-con">
        <Outlet />
      </div>
      <Dashboard />
    </div>
  );
};

export default Container;
