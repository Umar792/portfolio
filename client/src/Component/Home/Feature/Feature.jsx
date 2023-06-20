import React from "react";
import "./Feature.css";
import { AiFillAppstore, AiOutlineMobile } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "Website Development",
    dis: "I can build a complete full stack website with all functionality with the help of MERN Stack(React, Node , Express , Mongodb)",
    icon: <AiFillAppstore />,
  },
  {
    id: 2,
    title: "Mobile Application",
    dis: "I can build a complete full stack Mobile Application with all functionality with the help of React-Native(React-Native, Node , Express , Mongodb)",
    icon: <AiOutlineMobile />,
  },
  {
    id: 3,
    title: "Wordpress",
    dis: " I have good knowledge about Wordpress and its plugins, and build complete E-commerce like website uning Wordpress ",
    icon: <BsWordpress />,
  },
];

const Feature = () => {
  return (
    <div className="feature">
      <div>
        <h1>What I Do</h1>
      </div>
      <div className="main_box">
        {data.map((item) => {
          return (
            <div className="feature_box" key={item.id}>
              <p>{item.icon}</p>
              <h2>{item.title}</h2>
              <p>{item.dis}.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
