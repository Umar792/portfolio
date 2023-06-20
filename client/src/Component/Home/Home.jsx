import React from "react";
import Hero from "./Hero/Hero";
import Feature from "./Feature/Feature";
import Projects from "../Projects/Projects";
import Skills from "../resume/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
