import React, { useState } from "react";
import "./Navebar.css";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";

const Navebar = () => {
  const [shownav, setShowNav] = useState(false);
  return (
    <div className="navebar">
      {/* ------------- right_navebar  */}
      <div className="Left_Navebar">
        <img src="./my.png" alt="" />
        <h2>
          M<font>U</font>
        </h2>
      </div>
      {/* ----------------- right_navebar  */}
      <div>
        <BiMenuAltRight onClick={() => setShowNav(!shownav)} />
      </div>
      <div
        className={
          shownav ? "right_navebar rigt_mobile_navebar" : "right_navebar"
        }
      >
        <RxCross1 onClick={() => setShowNav(!shownav)} />
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/">
            <li>About</li>
          </NavLink>
          <NavLink to="/">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/">
            <li>Live Projects</li>
          </NavLink>
          <NavLink to="/">
            <li>Contact me</li>
          </NavLink>
        </ul>
        <button className="login">Sign-in</button>
        <button className="resgi">Sign-up</button>
      </div>
    </div>
  );
};

export default Navebar;
