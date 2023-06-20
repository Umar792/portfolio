import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Navebar from "./Component/Navebar/Navebar";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
