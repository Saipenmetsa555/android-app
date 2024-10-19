import React, { useState } from "react";
import { Button, Modal } from "antd";
const Modal2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Submit
      </Button>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 style={{ fontSize: "15px" }}>Thanks for your order</h1>
      </Modal>
    </>
  );
};
export default Modal2;
