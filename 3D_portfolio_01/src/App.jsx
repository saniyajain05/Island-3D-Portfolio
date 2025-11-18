import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Home, About, Projects, Contact, ThreeD, TwoD, TD_TA } from "./pages";
import Portfolio from "./pages/portfolio"
import Navbar from "./components/Navbar";
// import ThreeD from "./pages/3D";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/3D" element={<ThreeD />} />
        <Route path="/2D" element={<TwoD />} />
        <Route path="/TD_TA" element={<TD_TA />} />
      </Routes>
    </main>
  );
};

export default App;
