import React from "react";
// import "./index.css";
import "./register.css";
import Modals from "../Model";

const Register = () => {
  return (
    <div className="register-bg">
      <div className="register-con">
        {/* one */}
        <div className="another">
          <div className="register-i1">
            <p className="register-label">
              Full Name
              <br /> <span style={{ fontSize: "10px" }}>As per Aadhar</span>
            </p>
            <input
              placeholder="Enter Your Name"
              type="text"
              className="register-input"
            />
          </div>
          {/* two */}
          <div className="register-i1">
            <p className="register-label">Mobile No</p>
            <input
              placeholder="Enter Your Moblie No"
              type="text"
              className="register-input"
            />
          </div>
        </div>
        {/* ============================ */}
        <div className="another">
          <div className="register-i1">
            <p className="register-label">Aadhar No</p>
            <input
              placeholder="Enter Your Aadhar No"
              type="text"
              className="register-input"
            />
          </div>
          {/* two */}
          <div className="register-i1">
            <p className="register-label">Pan No</p>
            <input
              placeholder="Enter Your Pan No"
              type="text"
              className="register-input"
            />
          </div>
        </div>

        {/* ============================= */}
        <div className="cc">
          <div className="btn-container">
            {/* <p>Terms & Conditions</p> */}
            {/* <button className="register-section-btn">Submit</button> */}
            <Modals
              Btn={{
                text: "Submit",
                title: "Terms & Conditions",
                content:
                  "We will never share your data, we will keep your data safely",
                yes: "Agree",
                no: "Disagree",
                close: "Your Data is Stored Successfully You can login...",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <div className="reg-box">
<div className="regform">
  <label style={{ fontSize: "25px" }}>User Name</label>
  <div>
    <input type="text" className="reg-in" />
  </div>
  <label style={{ fontSize: "25px" }}>Password</label>
  <div>
    <input type="text" className="reg-in" />
  </div>
  <label style={{ fontSize: "25px" }}>Name</label>
  <span style={{ fontSize: "10px" }}>(As per Aadhar)</span>
  <div>
    <input className="reg-in" type="text" />
  </div>
  <label style={{ fontSize: "25px" }}>Mobile Number</label>
  <div>
    <input className="reg-in" type="number" />
  </div>
  <label style={{ fontSize: "25px" }}>Aadhar Number</label>
  <div>
    <input className="reg-in" type="number" />
  </div>
  <label style={{ fontSize: "25px" }}>PAN Number</label>
  <div>
    <input className="reg-in" type="text" />
  </div>
  <input type="checkbox" />
  <label>Terms & Conditions</label>
  <div>
    <button
      onClick={() => {
        navigate("/login");
      }}
    >
      Register
    </button>
  </div>
</div>
</div> */
}
