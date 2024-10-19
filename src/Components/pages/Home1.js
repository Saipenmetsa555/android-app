import React, { useState } from "react";
import "./index.css";
import TimeLine from "../TimeLine";
import Modals from "../Model";
import Modal2 from "../Modal2";

const Home1 = () => {
  const [selectCategory, setSelectCategory] = useState("select");
  const [selectName, setSelectName] = useState("");

  const handleSubmit = () => {
    alert("Thank you for your order");
  };

  return (
    <div className="con">
      <div className="inner">
        {/* one */}
        <div className="b1">
          <div className="">
            <p className="p">Category</p>
          </div>
          <div>
            <select
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
              className="drop"
            >
              <option value={"Fish"}>Fish</option>
              <option value={"Prawn"}>Prawn</option>
            </select>
          </div>
        </div>
        {/* two */}
        <div className="b1">
          <div className="">
            <p className="p">Name</p>
          </div>
          <div>
            {selectCategory === "Fish" ? (
              <select
                onChange={(e) => setSelectName(e.target.value)}
                className="drop"
              >
                <option value={"Apollo"}>Apollo</option>
                <option value={"Catla"}>Catla</option>
                <option value={"Murrel"}>Murrel</option>
                <option value={"Striped Murrel"}>Striped Murrel</option>
              </select>
            ) : (
              <select
                onChange={(e) => setSelectName(e.target.value)}
                className="drop"
              >
                <option>Select</option>
                <option value={"Tiger prawn"}>Tiger prawn</option>
                <option value={"Green prawn"}>Green prawn</option>
                <option value={"Banana prawn"}>Banana prawn</option>
              </select>
            )}
          </div>
        </div>
        {/* three */}
        <div className="b1">
          <div className="">
            <p className="p">Quantity</p>
          </div>
          <div>
            <input type="number" className="input" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Modal2 />

        {/* <button onClick={handleSubmit} className="home-submit">
          Submit
        </button> */}
        {/* <Modals Btn={{ text: "Thank you for you order" }} /> */}
        {/* <TimeLine /> */}
        {/* <img
          style={{ width: "350px", height: "300px" }}
          src="https://ft.syncfusion.com/featuretour/react-js2/images/timeline/react-timeline.png"
          alt="order"
        /> */}
      </div>
    </div>
  );
};

export default Home1;
