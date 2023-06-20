import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

const Hero = () => {
  return (
    <div className="Hero_section">
      <div className="Hero_Glass_section"></div>
      <div className="Hero_Glass_section2"></div>
      <div className="Hero_Glass_section3"></div>
      <div className="Hero_child">
        <p className="hero_p1">WELCOME TO MY WORLD</p>
        <h1>
          Hi, I'm <font>Muhammad Umar.</font>
        </h1>
        <div className="auto_type">
          <p>A</p>
          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "React.js Developer,",
                  "MERN Stack Developer,",
                  "React-Natvie Developer,",
                  "Wordpress Developer,",
                ],
              }}
            />
          </p>
        </div>
        <p className="discription_hero">
          I am a versatile developer proficient in MERN Stack, WordPress, and
          React Native. With expertise in MongoDB, Express.js, React.js, and
          Node.js, I build dynamic web applications. I also create custom
          WordPress websites. Additionally, I develop cross-platform mobile apps
          using React Native for iOS and Android.
        </p>
        {/* ---------------------- hero_section  */}
        <div className="Hero_Section_Icons">
          <div className="Icons_left">
            <div>
              <p>FIND ME IN</p>
            </div>
            <div className="Hero_icon_child">
              <div className="Hero_Icon">
                <FaFacebookF />
              </div>
              <div className="Hero_Icon">
                <AiOutlineGithub />
              </div>
              <div className="Hero_Icon">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="Icons_right">
            <div>
              <p>BEST SKILL ON</p>
            </div>
            <div className="Hero_icon_child">
              <div className="Hero_Icon">
                <FaReact />
              </div>
              <div className="Hero_Icon">
                <FaNodeJs />
              </div>
              <div className="Hero_Icon">
                <FaBootstrap />
              </div>
              <div className="Hero_Icon">
                <DiMongodb />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------- right hereo  */}
      <div className="right_Hero">
        <img
          src="https://nixxesolutions.com/wp-content/uploads/2023/06/Frame.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
