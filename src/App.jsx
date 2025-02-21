import { lazy, Suspense } from "react";

// const wait = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     },delay);
//   });
// }

// const About = lazy(()=> wait(3000).then(() => import("./Pages/About.jsx")));

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from 'react';
import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { useState } from "react";

const About = lazy(() => import("./Pages/About.jsx"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
