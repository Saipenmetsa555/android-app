import React from "react";
import TimeLine from "../TimeLine";

const Tracking = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid green",
        height: "400px",
      }}
    >
      <TimeLine />
    </div>
  );
};

export default Tracking;
