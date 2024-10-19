import React from "react";
import "./compo.css";
import "./Header.css";
import { LogoutOutlined } from "@ant-design/icons";

import Modals from "./Model";

const Header = () => {
  return (
    <header className="header-con" style={{}}>
      <div>
        <img
          className="logo"
          src="https://www.designevo.com/res/templates/thumb_small/regular-long-blue-stylish-font.webp"
          alt="logo"
        />
      </div>
      <div className="p1">
        {/* <button
          onClick={() => {
            Cookies.remove("jwt_token");
            window.location.reload();
          }}
          className="logout-btn"
        >
          Logout
        </button> */}
        <Modals
          className="logout-btn"
          Btn={{
            text: "Logout",
            title: "Logout",
            content: "Are you Sure to Logout",
            yes: "Yes",
            no: "No",
            close: "Logging Out...",
          }}
        />
        {/* <LogoutOutlined className="logout-icon" /> */}
      </div>
    </header>
  );
};

export default Header;
