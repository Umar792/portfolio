import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navebar from "./Component/Navebar/Navebar";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Home/Hero/Hero";
import Projects from "./Component/Projects/Projects";

const App = () => {
  const [select, setSelect] = useState(0)
  return (
    <div>
      <Navebar select={select} setSelect={setSelect} />
      {
        select === 0 ? <Hero /> : null
      }
      {
        select === 2 ? < Projects /> : null
      }
    </div>
    //  <BrowserRouter>
    //  <Navebar />
    //  <Routes>
    //    <Route exact path="/" element={<Home />} />
    //  </Routes>
    //  <Footer />
    // </BrowserRouter>
  );
};

export default App;
