import React from "react";
import "./H.css";
import Modal2 from "../Modal2";

const H = () => {
  return (
    <>
      <div className="h-bg">
        <div className="h-inn">
          <div className="j">
            {/* one */}
            <div className="section1">
              <label className="lable-cat">Category</label>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
            {/* two */}
            <div className="section1">
              <p className="lable-cat">Name</p>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
            {/* three */}
            <div className="section1">
              <p className="lable-cat">Quantity</p>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
            {/* four */}
            <div className="section1">
              <p className="lable-cat">Address</p>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
            {/* five */}
            <div className="section1">
              <p className="lable-cat">Rate</p>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
            {/* six */}
            <div className="section1">
              <p className="lable-cat">Total Amount</p>
              <select className="dropp">
                <option>Fish</option>
                <option>Prawn</option>
              </select>
            </div>
          </div>
          <Modal2 />
        </div>
      </div>
      {/* ================= */}
      <div className="mobile-container">
        <div className="inner-container">
          {/* zero */}
          <div className="mobile-con">
            <label>Referal ID</label>
            <input value={"12SIJSIS001"} type="text" className="mobile-input" />
          </div>
          {/* one */}
          <div className="mobile-con">
            <label>Category</label>
            <select className="mobile-drop">
              <option>Fish</option>
              <option>Prawn</option>
            </select>
          </div>
          {/* two */}
          <div className="mobile-con">
            <label>Item</label>
            <select className="mobile-drop">
              <option>Apollo</option>
              <option>Tiger Prawn</option>
              <option>Mini Prawn</option>
            </select>
          </div>
          {/* three */}
          <div className="mobile-con">
            <label>Quantity</label>
            <input type="number" className="mobile-input" />
          </div>
          {/* four */}
          <div className="mobile-con">
            <label>Rate</label>
            <input type="number" className="mobile-input" />
          </div>
          {/* five */}
          <div className="mobile-con">
            <label>Total Amount</label>
            <input disabled type="number" className="mobile-input" />
          </div>
          {/* six */}
          <div className="mobile-con">
            <label>Address</label>
            <input type="number" className="mobile-input" />
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Modal2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default H;
// const H = () => {
//   return (

//   );
// };

// export default H;
