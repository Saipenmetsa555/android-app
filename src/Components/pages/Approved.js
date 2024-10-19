import React from "react";
import { useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";

const ApprovedModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Approved
      </Button>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 style={{ fontSize: "15px" }}>Your Approval has been submitted</h1>
      </Modal>
    </>
  );
};

const Approved = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Bill</h1>
      <div
        style={{
          width: "70%",
          height: "150px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <p style={{ fontWeight: "700" }}>
          Name: <span>Rahul</span>
        </p>
        <p style={{ fontWeight: "700" }}>
          Bill Amount:<span> 1000</span>
        </p>
        <ApprovedModal />
        {/* <button
          style={{
            backgroundColor: "#006FFD",
            borderWidth: "0px",
            height: "30px",
            width: "100px",
            color: "white",
            borderRadius: "8px",
            margin: "10px",
          }}
        >
          Approved
        </button> */}
      </div>
    </div>
  );
};

export default Approved;
