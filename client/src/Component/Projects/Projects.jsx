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
  {
    id: 5,
    imageUrl: "./lah.PNG",
    title: "React.js App",
    dis: "Hi, i build this website with the help of React.js",
    link: "https://umarproject17.netlify.app/",
    git: "",
  },
  {
    id: 6,
    imageUrl: "./jav.PNG",
    title: "HTML, CSS , JAVASCRIPT",
    dis: "Hi, i build this billing app with the help of html , css and javascript",
    link: "https://umarproject16.netlify.app/",
    git: "",
  },
  {
    id: 7,
    imageUrl: "./tec.PNG",
    title: "tic tac toe",
    dis: "Hi, i build this billing tec tac toe with the help of html , css and javascript",
    link: "https://umarproject15.netlify.app/",
    git: "",
  },
  {
    id: 8,
    imageUrl: "./mes.PNG",
    title: "messanger",
    dis: "Hi, i build this billing messanger with the help of html , css and javascript",
    link: "https://umarproject14.netlify.app/",
    git: "",
  },
  {
    id: 9,
    imageUrl: "./cv.PNG",
    title: "SV Maker",
    dis: "Hi, i build this billing cv maker with the help of html , css and javascript",
    link: "https://umarproject13.netlify.app/",
    git: "",
  },
  {
    id: 10,
    imageUrl: "./ho.PNG",
    title: "React.js website",
    dis: "Hi, i build this website with the help of React.js",
    link: "https://umarproject11.netlify.app/",
    git: "",
  },
  {
    id: 11,
    imageUrl: "./to.PNG",
    title: "Todo App",
    dis: "Hi, i build this todo app with the help of React.js",
    link: "https://umarproject10.netlify.app/",
    git: "",
  },
  {
    id: 12,
    imageUrl: "./ke.PNG",
    title: "Kepp you note",
    dis: "Hi, i build this Note app with the help of React.js",
    link: "https://umarproject6.netlify.app/",
    git: "",
  },
  {
    id: 13,
    imageUrl: "./port.PNG",
    title: "i build this first portfolio",
    dis: "Hi, i build this portfolio app with the help of React.js",
    link: "https://umarproject3.netlify.app/",
    git: "",
  },
  {
    id: 14,
    imageUrl: "./so.PNG",
    title: "i build templete",
    dis: "Hi, i build this templete website with the help of React.js",
    link: "https://umarproject2.netlify.app/",
    git: "",
  },
  {
    id: 15,
    imageUrl: "./port2.PNG",
    title: "Portfolio templete",
    dis: "Hi, i build this Portfolio templete website with the help of React.js",
    link: "https://umarproject1.netlify.app/",
    git: "",
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
