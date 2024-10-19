// import React from "react";
// import { Button, Modal } from "antd";
// const Modals = ({ Btn }) => {
//   const [open, setOpen] = React.useState(false);
//   const [loading, setLoading] = React.useState(true);
//   const showLoading = () => {
//     setOpen(true);
//     setLoading(true);

//     // Simple loading mock. You should add cleanup logic in real world.
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showLoading}>
//         {Btn.text}
//       </Button>
//       <Modal
//         title={<p>Terms & Conditions</p>}
//         footer={
//           <Button type="primary" onClick={showLoading}>
//             Agree
//           </Button>
//         }
//         loading={loading}
//         open={open}
//         onCancel={() => setOpen(false)}
//       >
//         <p>
//           We will never share the data to anyone we just keep your data
//           securly...
//         </p>
//       </Modal>
//     </>
//   );
// };
// export default Modals;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import Cookies from "js-cookie";
const Modals = ({ Btn }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(Btn.content);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText(Btn.close);
    setConfirmLoading(true);
    setTimeout(() => {
      if (Btn.text === "Logout") {
        Cookies.remove("jwt_token");
        window.location.reload();
      } else {
        setOpen(false);
        setConfirmLoading(false);
        navigate("/login");
      }
    }, 3000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button
        // style={{ width: "200px", height: "35px" }}
        type="primary"
        onClick={showModal}
      >
        {Btn.text}
      </Button>
      <Modal
        title={Btn.title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={Btn.yes}
        cancelText={Btn.no}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};
export default Modals;
