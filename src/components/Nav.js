import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";

function Nav() {
  let [bar, setBar] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (100 < window.pageYOffset) {
          setBar(true);
        } else {
          setBar(false);
        }
      },
      []
    );
  });

  return (
    <div className={`nav ${bar && "nav_black"}`}>
      <img
        className="logo"
        src={require("../images/Netflix-Logo.png")}
        alt=""
      />

      <img className="login" src={require("../images/login.png")} alt="" />
    </div>
  );
}

export default Nav;
