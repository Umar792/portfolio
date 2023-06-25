import React, { useState } from "react";
import "./Navebar.css";
// import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";

const Navebar = ({select, setSelect}) => {
  const [shownav, setShowNav] = useState(false);


  const navclick = ()=>{

  }


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
        <ul onClick={()=> setShowNav(!shownav)}>
          {/* <NavLink to="/"> */}
            <li onClick={()=> setSelect(0)}>Home</li>
          {/* </NavLink> */}
          {/* <NavLink to="/"> */}
            <li onClick={()=> setSelect(1)}>About</li>
          {/* </NavLink> */}
          {/* <NavLink to="/"> */}
            <li onClick={()=> setSelect(2)}>Projects</li>
          {/* </NavLink> */}
          {/* <NavLink to="/"> */}
            <li onClick={()=> setSelect(3)}>Live Projects</li>
          {/* // </NavLink> */}
          {/* <NavLink to="/"> */}
            <li onClick={()=> setSelect(4)}>Contact me</li>
          {/* // </NavLink> */}
        </ul>
        {/* <button className="login">Sign-in</button>
        <button className="resgi">Sign-up</button> */}
      </div>
    </div>
  );
};

export default Navebar;
