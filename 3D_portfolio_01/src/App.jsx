import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";
import Portfolio from "./pages/portfolio"
import Navbar from "./components/Navbar";

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
      </Routes>
    </main>
  );
};

export default App;
