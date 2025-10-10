// import React from "react";
// import { Route, Routes } from "react-router-dom";

// import { Home, About, Projects, Contact } from "./pages";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <main className="bg-slate-300/20">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </main>
//   );
// };

// export default App;


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import  Footer from "./components/footer";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

import Portfolio from "./pages/portfolio";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;