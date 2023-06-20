import React from "react";
import "./Projects.css";
import { AiOutlineGithub, AiFillChrome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    imageUrl:
      "https://noorportfolio1.netlify.app/static/media/projectTwo.1fabe2c8c93632187ee6.jpg",
    title: "E-COMMERCE WEBSITE",
    dis: "Hi, i build this E-commerce website with the help of MERN Stack with all functionality,",
    link: "https://clickordernow.com/",
    git: "https://github.com/Umar792/Complete-Ecommerce-MERN",
  },
  {
    id: 2,
    imageUrl: "./note.PNG",
    title: "Note WEBSITE",
    dis: "Hi, i build this Note website with the help of MERN Stack with all functionality,",
    link: "https://mern3noteapp.netlify.app/",
    git: "https://github.com/Umar792/NoteApp",
  },
  {
    id: 3,
    imageUrl: "./exp.PNG",
    title: "Xperthousetechnology",
    dis: "Hi, i build this Wordpress website for Xperthousetechnology,i build this Wodpress with the help of elementpr it also mobile responsive",
    link: "https://xpertshousetech.net/",
  },
  {
    id: 4,
    imageUrl: "./sinp.PNG",
    title: "Inventory App",
    dis: "Hi, i build this Inventory website  with the help of MERN Stack with full functionality",
    link: "",
    git: "https://github.com/Umar792/MERN-Inventory-App",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects_child">
        {projectsData.map((item) => {
          return (
            <div className="pro_box">
              <img src={item.imageUrl} alt="" />
              <p className="title">{item.title}</p>
              <p
                style={{
                  margin: "10px 0px",
                  justifyContent: "flex-start",
                  letterSpacing: "1px",
                }}
              >
                {item.dis}
              </p>

              <div className="git">
                {item.git && (
                  <a href={item.git && item.git} target="_blank">
                    <AiOutlineGithub />
                  </a>
                )}
                {item.link && (
                  <a href={item.link && item.link} target="_blank">
                    <AiFillChrome />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
