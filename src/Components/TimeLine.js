// import {
//   TimelineComponent,
//   ItemsDirective,
//   ItemDirective,
// } from "@syncfusion/ej2-react-layouts";
// import "../App.css";

// function TimeLine() {
//   return (
//     <div id="timeline" style={{ height: "350px" }}>
//       <TimelineComponent>
//         <ItemsDirective>
//           <ItemDirective content="Order Confirmed" />
//           <ItemDirective content="Shipped" />
//           <ItemDirective content="Out For Delivery" />
//           <ItemDirective content="Delivered" />
//         </ItemsDirective>
//       </TimelineComponent>
//     </div>
//   );
// }

// export default TimeLine;

import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { useNavigate } from "react-router-dom";

const TimeLine = () => {
  const navigate = useNavigate();
  return (
    <>
      <Timeline
        items={[
          {
            color: "green",
            children: "Order Approved",
          },
          {
            color: "green",
            children: "Order initialted",
          },
          {
            dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            color: "red",
            children: "Order Reached to nearhub",
          },
          {
            dot: <ClockCircleOutlined className="timeline-clock-icon" />,
            color: "red",
            children: "Received",
          },
        ]}
      />
      <button
        onClick={() => {
          navigate("/approved");
        }}
        style={{
          backgroundColor: "#006FFD",
          borderWidth: "0px",
          height: "30px",
          width: "100px",
          color: "white",
          borderRadius: "8px",
          maring: "10px",
        }}
      >
        Received
      </button>
    </>
  );
};
export default TimeLine;
