import React, { useState } from "react";
import "./index.css";

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("Select");
  const [selectName, setSelectName] = useState("");

  return (
    <div className="home-container">
      <div className="h">
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            border: "2px solid green",
            height: "100px",
          }}
        >
          <div className="d1">
            <label className="label">Category</label>
            <select
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
              className="category-drop"
            >
              <option>Select</option>
              <option value={"Fish"}>Fish</option>
              <option value={"Prawn"}>Prawn</option>
            </select>
          </div>
          <div className="d1">
            <label className="label">Name</label>
            {selectCategory === "Fish" ? (
              <select
                disabled={selectCategory === "Select"}
                value={selectName}
                onChange={(e) => setSelectName(e.target.value)}
                className="category-drop"
              >
                <option>Select</option>
                <option value={"Apollo"}>Apollo</option>
                <option value={"Catla"}>Catla</option>
                <option value={"Murrel"}>Murrel</option>
                <option value={"Striped Murrel"}>Striped Murrel</option>
              </select>
            ) : (
              <select
                disabled={selectCategory === "Select"}
                value={selectName}
                onChange={(e) => setSelectName(e.target.value)}
                className="category-drop"
              >
                <option>Select</option>
                <option value={"Tiger prawn"}>Tiger prawn</option>
                <option value={"Green prawn"}>Green prawn</option>
                <option value={"Banana prawn"}>Banana prawn</option>
              </select>
            )}
          </div>
        </div>
        <div>
          <label>Quantity</label>
        </div>
        <button>Submitshlsjfd</button>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="home-container">
      <div className="h">
        <div className="d1">
          <label>Category</label>
          <select
            onChange={(e) => setSelectCategory(e.target.value)}
            value={selectCategory}
            className="category-drop"
          >
            <option>Select</option>
            <option value={"Fish"}>Fish</option>
            <option value={"Prawn"}>Prawn</option>
          </select>
        </div>
        <div className="d2">
          <label>Name</label>
          <select className="category-drop">
            <option>Select</option>
            <option value={"Salmon"}>Salmon</option>
            <option value={"Tuna"}>Tuna</option>
            <option value={"Perch"}>Perch</option>
            <option value={"Hilsa"}>Hilsa</option>
          </select>
        </div>
        <div className="d2">
          <label>Name</label>
          <select className="category-drop">
            <option>Select</option>
            <option value={"Salmon"}>Salmon</option>
            <option value={"Tuna"}>Tuna</option>
            <option value={"Perch"}>Perch</option>
            <option value={"Hilsa"}>Hilsa</option>
          </select>
        </div>
      </div>
    </div> */
}
